import express from "express";
import { getProducts } from "../controllers/productController.js";
import { getProductById } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);

export default productRouter;