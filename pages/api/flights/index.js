import axios from "axios";
const country = "Japan";
const originPlace = "NRT-sky";
const destinationPlace = "OSAA-sky";
const outboundpartialdate = "2020-09-01";
export const fetchPlacesData = async () => {
  try {
    const {
      data: { Places }
    } = await axios.get(
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/",
      {
        headers: {
          "content-type": "application/json",
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_PlacesDataKey,
          useQueryString: true
        },
        params: {
          query: `${country}`
        }
      }
    );
    console.log(Places);
  } catch (err) {
    console.error(err);
  }
};

fetchPlacesData();

export const fetchRoutesAndQuotesData = async () => {
  try {
    const {
      data: { Quotes, Places, Carriers }
    } = await axios.get(
      `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${originPlace}/${destinationPlace}/${outboundpartialdate}`,
      {
        headers: {
          "content-type": "application/json",
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RoutesDataKey,
          useQueryString: true
        }
      }
    );
    console.log(Quotes);
    console.log(Places);
    console.log(Carriers);
  } catch (err) {
    console.log(err);
  }
};

fetchRoutesAndQuotesData();
