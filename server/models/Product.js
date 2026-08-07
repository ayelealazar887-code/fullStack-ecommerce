import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  oldPrice: Number,
  rating: Number,
  sale: Boolean,
  description: String,
});

export default mongoose.model("Product", productSchema);