import mongoose from "mongoose";

const connectDB = async () => {
  const MONGODB_URI = process.env.MONGO_URI; // read inside function
  if (!MONGODB_URI) {
    throw new Error("MongoDB URI missing");
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
