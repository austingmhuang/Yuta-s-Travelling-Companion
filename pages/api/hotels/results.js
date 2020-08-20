import { getPropertiesList } from "../../../server/hotels";
//http://localhost:3000/api/hotels/results?destId=45&checkInDate=2020-01-08&checkOutDate=2020-01-15&persons=1
export default async (req, res) => {
  const {
    query: { destId, checkInDate, checkOutDate, persons }
  } = req;

  console.log("destId", destId);
  const properties = await getPropertiesList(
    destId,
    checkInDate,
    checkOutDate,
    persons
  );
  console.log("properties", properties);
  if (!properties) {
    return res.status(404).json({
      status: 404,
      message: "Oops, not found"
    });
  }

  // relevant properties on the following object: name, thumbnailUrl, starRating, address, ratePlan.price.current, maybe also location for weather
  return res.json({ properties });
};
