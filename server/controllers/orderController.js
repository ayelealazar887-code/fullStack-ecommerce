import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      email,
      streetAddress1,
      streetAddress2,
      city,
      state,
      zipCode,
      shipToDifferentAddress,
      notes,
      payment,
      items,
      totalAmount,
    } = req.body;

    if (!firstName || !lastName || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required customer information",
      });
    }

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Order must contain at least one product",
      });
    }

    const order = await Order.create({
      firstName,
      lastName,
      phone,
      email,
      streetAddress1,
      streetAddress2,
      city,
      state,
      zipCode,
      shipToDifferentAddress,
      notes,
      payment,
      items,
      totalAmount,
    });

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
};