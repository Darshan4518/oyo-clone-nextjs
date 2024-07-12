import connectDb from "@/db";
import User from "@/models/user-model";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      connectDb();
      const { name, email, password } = req.body;
      const emailExist = await User.findOne({ email });

      if (!name || !email || !password) {
        return res.json({ msg: "all fieds are required" });
      }
      if (emailExist) {
        return res.json({ msg: "user already exist pls login" });
      }
      const hashpass = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashpass,
      });

      const result = await newUser.save();
      const token = jwt.sign({ token: result._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      return res.json({ msg: "register successfully", token });
    }
  } catch (error) {
    console.log("register api error");
  }
}
