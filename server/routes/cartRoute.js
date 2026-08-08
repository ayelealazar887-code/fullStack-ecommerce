import express from "express";

import {
  getCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../controllers/cartController.js";

import { protect } from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.get("/", protect, getCart);

cartRouter.post("/", protect, addToCart);

cartRouter.patch(
  "/increase/:productId",
  protect,
  increaseQuantity
);

cartRouter.patch(
  "/decrease/:productId",
  protect,
  decreaseQuantity
);

cartRouter.delete(
  "/:productId",
  protect,
  removeFromCart
);

export default cartRouter;