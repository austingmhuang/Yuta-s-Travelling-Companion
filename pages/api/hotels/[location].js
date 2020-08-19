import { getDestinationIds } from "../../../server/hotels";

export default async (req, res) => {
  const {
    query: { location }
  } = req;

  const id = await getDestinationIds(location);

  if (!id) {
    return res.status(404).json({
      status: 404,
      message: "Oops, not found"
    });
  }

  // returns an array of destinationIds that can be passed to the results fetch to get a list of hotels
  return res.json({ id });
};
