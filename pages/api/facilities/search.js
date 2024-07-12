import connectDb from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectDb();
    const key = req.query.val;
    const hotels = await Hotel.find({ "facilities.name": { $in: key } });
    return res.json({ msg: "good", hotels });
  }
}
