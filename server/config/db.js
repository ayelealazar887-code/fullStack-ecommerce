import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try{
        mongoose.connection.on('connected', () => console.log("database connected"))
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
};

export default connectDB;