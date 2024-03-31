// test api
import User from "@/model/UserModel.mjs";

export default async function handler(req, res) {
  const userList = await User.find({});
  res.status(200).json({ name: "John Doe", users: userList ?? [] });
}
