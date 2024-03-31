// write a simple api
// connect to db
import cachedConnection from "@/lib/mongoose";

export default async function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
