import axios from "axios";

const country = "Japan";
const originPlace = "NRT-sky";
const destinationPlace = "OSAA-sky";
const outboundpartialdate = "2020-09-01";

const fetchPlacesData = async () => {
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
          "x-rapidapi-key":
            "f3b72532e5mshf3212aa087d7ef8p170d42jsnb3b9bd882b75",
          useQueryString: true
        },
        params: {
          query: `${country}`
        }
      }
    );
  } catch (err) {
    console.error(err);
  }
};

fetchPlacesData();

const fetchRoutesData = async () => {
  try {
    const { data } = await axios.get(
      `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${originPlace}/${destinationPlace}/${outboundpartialdate}`,
      {
        headers: {
          "content-type": "application/json",
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "c573d899fbmsh7f790eccbfa07a7p17edf7jsnf6b3cf11be53",
          useQueryString: true
        }
      }
    );

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchRoutesData();
