import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED:", connection.connection.host);
  } catch (error) {
    console.error("ERROR CONNECTING TO MONGODB:", error);
    process.exit(1); // 1 status code means fail, 0 means success
  }
};
