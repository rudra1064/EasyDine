import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "restro_reservation"
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => {
    console.error(`MongoDB connection error: ${err}`);
  });
};

