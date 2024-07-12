import connectDb from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      connectDb();

      if (req.query.id) {
        const hotel = await Hotel.findById(req.query.id);
        return res.status(200).json({ msg: "good", hotel });
      }
    }
  } catch (error) {
    console.log("hotel id api error");
  }
}
