import mongoose from "mongoose";

const uri = process.env.MONGO_URL;
const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("mongoose connected");
  } catch (error) {
    console.log("mongoose not connected", error);
  }
};
export default connectDb;
