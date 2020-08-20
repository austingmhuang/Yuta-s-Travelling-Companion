import { getWeather } from "../../../server/weather";

export default async (req, res) => {
  const {
    query: { coordinates }
  } = req;

  const currentWeather = await getWeather(coordinates);
  console.log("weather", currentWeather);
  if (!currentWeather) {
    return res.status(404).json({
      status: 404,
      message: "Oops, not found"
    });
  }
  // properties summary, icon and temperature for example
  return res.json({ currentWeather });
};
