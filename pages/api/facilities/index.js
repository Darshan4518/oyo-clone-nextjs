import connectDb from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  connectDb();
  if (req.method === "GET") {
    const facilities = await Hotel.find({}).distinct("facilities.name");
    return res.json({ msg: "good", facilities });
  }
}
