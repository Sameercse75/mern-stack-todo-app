import mongoose from "mongoose";

export const connectDb =async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('db connected successfully');
  } catch (error) {
    console.log(`error in db ${error}`);
    process.exit(1)
  }
}