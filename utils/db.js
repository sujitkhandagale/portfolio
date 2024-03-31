// utils/db.js

import mongoose from "mongoose";

export async function connectDB() {
  try {
    const url =
      "mongodb+srv://sujitkh94:tda2030a@asiatic.mrb9bke.mongodb.net/userDatabase";
    const conn = await mongoose.connect(url);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
}
