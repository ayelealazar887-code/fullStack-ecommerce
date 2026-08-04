import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import { Products } from "./data/Product.js";
import dns from 'dns';
dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Product.deleteMany();

await Product.insertMany(Products);

console.log("Products inserted successfully!");

process.exit();