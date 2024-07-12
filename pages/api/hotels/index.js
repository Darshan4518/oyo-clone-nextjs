import connectDb from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  // if (req.method === "POST") {
  //   const hotel = new Hotel(req.body);
  //   const result = await hotel.save();
  //   res.json({ msg: "hotel added" });
  // }
  try {
    if (req.method === "GET") {
      connectDb();

      const hotels = await Hotel.find({ location: req.query.city });
      if (hotels.length > 0) {
        return res.status(200).json({ msg: "Good", hotels });
      }
      const allhotels = await Hotel.find({});
      return res.status(200).json({ msg: "Good", allhotels });
    }
  } catch (error) {
    console.log("hotel api error");
  }
}
