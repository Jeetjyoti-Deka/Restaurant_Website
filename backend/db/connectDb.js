import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectDb;
