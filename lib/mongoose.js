// lib/mongoose.js

import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost/nextjs-blog";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

let cachedConnection = null;

cachedConnection = mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((mongoose) => {
    console.log("Connected to MongoDB");
    return mongoose;
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

export default cachedConnection;
