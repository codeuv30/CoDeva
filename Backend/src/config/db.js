import mongoose from "mongoose";
import CONFIG from "./config.js";
import userModel from "../models/user.model.js";

const connectToDB = async () => {
  try {
    await mongoose.connect(CONFIG.MONGO_URI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    error.message = "Error while connecting to MongoDB";
    throw error;
  }
};

export default connectToDB;
