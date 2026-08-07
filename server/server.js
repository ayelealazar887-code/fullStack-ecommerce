import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import dns from 'dns';
import userRouter from "./routes/userRoute.js";

dns.setServers(['8.8.8.8', '1.1.1.1']);
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Route
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)


connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});