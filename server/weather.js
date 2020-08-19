const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.PROJECT_API_KEY;
// 48.328913,11.738239
export const getWeather = async locationCoordinates => {
  try {
    let res = await axios({
      method: "GET",
      url: `https://dark-sky.p.rapidapi.com/${locationCoordinates}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "dark-sky.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
        useQueryString: true
      },
      params: {
        lang: "en",
        units: "auto"
      }
    });

    let data = res.data.currently;

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
