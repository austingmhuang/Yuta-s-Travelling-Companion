import { getDestinationIds } from "../../../server/hotels";

export default async (req, res) => {
  const {
    query: { location }
  } = req;

  console.log("location", location);
  const id = await getDestinationIds(location);
  console.log("id", id);
  if (!id) {
    return res.status(404).json({
      status: 404,
      message: "Oops, not found"
    });
  }
  return res.json({ id });
};
