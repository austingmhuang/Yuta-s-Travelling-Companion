const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.PROJECT_API_KEY;

export const getDestinationIds = async locationString => {
  try {
    let res = await axios({
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/locations/search",
      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
        useQueryString: true
      },
      params: {
        locale: "en_US",
        query: locationString
      }
    });

    // get an array of objects (suggestions) of which each represents a hotel chain
    // each hotel chain has a property named entities (hotels) that has a destinationId which is used for getPropertiesList
    let data = res.data.suggestions;
    // also contains lat/long if needed
    let hotelGroups = data.map(hotelGroup => hotelGroup.entities);
    let flattened = hotelGroups.flat();
    let hotelIds = flattened.map(hotel => hotel.destinationId);
    // console.log(data);
    return hotelIds;
  } catch (error) {
    console.log(error);
  }
};

export const getPropertiesList = async (
  destId,
  checkInDate,
  checkOutDate,
  persons
) => {
  try {
    let res = await axios({
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/properties/list",
      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
        useQueryString: true
      },
      params: {
        currency: "USD",
        locale: "en_US",
        sortOrder: "PRICE",
        destinationId: destId,
        pageNumber: "1",
        checkIn: checkInDate, //"2020-01-08"
        checkOut: checkOutDate, //"2020-01-15"
        pageSize: "25",
        adults1: persons // "1"
      }
    });

    // get an array of objects of which each represents a hotel
    // each hotel has a property named id which is used for get details, but also contains some basic data (deals, reviews, landmarks...)
    let results = res.data.data.body.searchResults.results;
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

// getDestinationIds("new york");
// getPropertiesList("1506246", "2020-01-08", "2020-01-15", "1");
