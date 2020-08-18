const axios = require("axios");
// import React from "react";

// const Hotels = (props) => {
const getDestinationIds = async locationString => {
  try {
    let res = await axios({
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/locations/search",
      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "f3b72532e5mshf3212aa087d7ef8p170d42jsnb3b9bd882b75",
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
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getPropertiesList = async (
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
        "x-rapidapi-key": "f3b72532e5mshf3212aa087d7ef8p170d42jsnb3b9bd882b75",
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

// fill with values from props?
getDestinationIds("new york");
getPropertiesList("1506246", "2020-01-08", "2020-01-15", "1");

/*    return (
    <div>
      <h1>Hotels in {props.location} </h1>
      <p>Currently available hotels</p>
    </div>
  );
}; */

// export default Hotels;
