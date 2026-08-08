import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// GET CART
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user,
    }).populate("items.product");

    if (!cart) {
      return res.json({
        success: true,
        cart: [],
      });
    }

    res.json({
      success: true,
      cart: cart.items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ADD TO CART
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const qty = Number(quantity) || 1;

    if (qty < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be at least 1",
      });
    }

    let cart = await Cart.findOne({
      user: req.user,
    });

    // Create cart if user doesn't have one
    if (!cart) {
      cart = await Cart.create({
        user: req.user,
        items: [
          {
            product: productId,
            quantity: qty,
          },
        ],
      });

      const populatedCart = await cart.populate(
        "items.product"
      );

      return res.status(201).json({
        success: true,
        message: "Product added to cart",
        cart: populatedCart.items,
      });
    }

    // Check whether product already exists
    const existingItem = cart.items.find(
      (item) =>
        item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += qty;
    } else {
      cart.items.push({
        product: productId,
        quantity: qty,
      });
    }

    await cart.save();

    const populatedCart = await cart.populate(
      "items.product"
    );

    res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart: populatedCart.items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// INCREASE QUANTITY
export const increaseQuantity = async (req, res) => {
  try {
    const { productId } = req.params;

    const cart = await Cart.findOne({
      user: req.user,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (item) =>
        item.product.toString() === productId
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Product not in cart",
      });
    }

    item.quantity += 1;

    await cart.save();

    const populatedCart = await cart.populate(
      "items.product"
    );

    res.json({
      success: true,
      cart: populatedCart.items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DECREASE QUANTITY
export const decreaseQuantity = async (req, res) => {
  try {
    const { productId } = req.params;

    const cart = await Cart.findOne({
      user: req.user,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (item) =>
        item.product.toString() === productId
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Product not in cart",
      });
    }

    item.quantity -= 1;

    // Remove when quantity becomes 0
    if (item.quantity <= 0) {
      cart.items = cart.items.filter(
        (item) =>
          item.product.toString() !== productId
      );
    }

    await cart.save();

    const populatedCart = await cart.populate(
      "items.product"
    );

    res.json({
      success: true,
      cart: populatedCart.items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// REMOVE PRODUCT FROM CART
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    const cart = await Cart.findOne({
      user: req.user,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    cart.items = cart.items.filter(
      (item) =>
        item.product.toString() !== productId
    );

    await cart.save();

    const populatedCart = await cart.populate(
      "items.product"
    );

    res.json({
      success: true,
      message: "Product removed from cart",
      cart: populatedCart.items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};