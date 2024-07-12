import connectDb from "@/db";
import User from "@/models/user-model";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      connectDb();
      const { email, password } = req.body;
      const emailExist = await User.findOne({ email });

      if (!email || !password) {
        return res.json({ msg: "all fieds are required" });
      }
      if (!emailExist) {
        return res.json({ msg: "pls signUp" });
      }
      const hashpass = await bcrypt.compare(password, emailExist.password);

      const token = jwt.sign(
        { token: emailExist._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      );
      return res.json({ msg: "login successfully", token });
    }
  } catch (error) {
    console.log("login api error");
  }
}
