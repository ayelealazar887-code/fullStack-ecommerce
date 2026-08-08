import axios from "axios";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";


export const initializePayment = async (req, res) => {
  try {
    const { email, amount } = req.body;

    if (!email || !amount) {
      return res.status(400).json({
        success: false,
        message: "Email and amount are required",
      });
    }

    // Paystack expects amount in the smallest
    // currency unit.
    const paystackAmount = Math.round(
      Number(amount) * 100
    );

    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount: paystackAmount,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      success: true,
      authorization_url:
        response.data.data.authorization_url,

      access_code:
        response.data.data.access_code,

      reference:
        response.data.data.reference,
    });
  } catch (error) {
    console.error(
      "Paystack initialization error:",
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false,
      message:
        error.response?.data?.message ||
        "Payment initialization failed",
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const { reference } = req.params;

    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization:
            `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const payment = response.data.data;

    // Make sure Paystack says payment was successful
    if (payment.status !== "success") {
      return res.status(400).json({
        success: false,
        message: "Payment was not successful",
      });
    }

    // Get user's cart
    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    // Create order items
    const orderItems = cart.items.map((item) => ({
      product: item.product._id,
      name: item.product.name,
      price: item.product.price,
      image: item.product.image,
      quantity: item.quantity,
    }));

    // Calculate total from database products
    const totalAmount = cart.items.reduce(
      (total, item) =>
        total +
        Number(item.product.price) * item.quantity,
      0
    );

    // Create order
    const order = await Order.create({
      user: req.user._id,

      items: orderItems,

      totalAmount,

      paymentMethod: "card",

      paymentStatus: "paid",

      orderStatus: "processing",

      paymentReference: reference,
    });

    // Clear cart
    cart.items = [];
    await cart.save();

    return res.json({
      success: true,
      message: "Payment verified and order created",
      order,
    });
  } catch (error) {
    console.error(
      "Verify payment error:",
      error.response?.data || error.message
    );

    return res.status(500).json({
      success: false,
      message: "Unable to verify payment",
    });
  }
};