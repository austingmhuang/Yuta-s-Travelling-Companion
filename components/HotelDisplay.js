import HotelCard from "./HotelCard";
import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import styles from "../styles/HotelDisplay.module.css";

const HotelDisplay = () => {
  let [hotels, setHotels] = useState([]);
  let [loading, setLoading] = useState(true);
  console.log("hotels in hotel display", hotels);
  const getDestinationIds = async location => {
    try {
      const res = await fetch(`http://localhost:3000/api/hotels/${location}`);
      const destinationIds = await res.json();
      return destinationIds;
    } catch (error) {
      return error;
    }
  };

  /* const getHotels = React.useCallback(
    (destinationIds, checkInDate, checkOutDate) => {
      fetch(
        `http://localhost:3000/api/hotels/results?destId=${destinationIds}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
      )
        .then((response) => {
          console.log(response);
          setHotels(response.properties);
        })
        .catch((error) => console.error(error));
    },
    [hotels]
  ); */

  useEffect(() => {
    const getHotels = async (destinationIds, checkInDate, checkOutDate) => {
      try {
        // setLoading(true);
        const res = await fetch(
          `http://localhost:3000/api/hotels/results?destId=${destinationIds}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
        );
        hotels = await res.json();
        hotels = hotels.properties;
        console.log(hotels);
        // return hotels;
      } catch (error) {
        console.error(error);
        return error;
      }
    };
    getHotels("45", "2020-01-08", "2020-01-15");
  }, [setHotels]);

  /* useEffect(() => {
    const getHotels = async (destinationIds, checkInDate, checkOutDate) => {
      setHotels(
        await fetch(
          `http://localhost:3000/api/hotels/results?destId=${destinationIds}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
        )
      );
    };
    getHotels("45", "2020-01-08", "2020-01-15");
    console.log(hotels);
  }, [setHotels]); */

  // getHotels("45", "2020-01-08", "2020-01-15"); // WIP just show the first 3 items of hotels fetch result
  /* useEffect(() => {
    if (hotels.length > 0) setLoading(false);
  }, [setLoading]) */

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.hotelDisplay}>
          <HotelCard
            hotelName={hotels[0].name}
            hotelRating={hotels[0].starRating}
            hotelAddress={hotels[0].address}
            hotelPrice={hotels[0].ratePlan.price}
            imgUrl={hotels[0].thumbnailUrl}
          />
          <HotelCard
            hotelName={hotels[1].name}
            hotelRating={hotels[1].starRating}
            hotelAddress={hotels[1].address}
            hotelPrice={hotels[1].ratePlan.price}
            imgUrl={hotels[1].thumbnailUrl}
          />
          <HotelCard
            hotelName={hotels[2].name}
            hotelRating={hotels[2].starRating}
            hotelAddress={hotels[2].address}
            hotelPrice={hotels[2].ratePlan.price}
            imgUrl={hotels[2].thumbnailUrl}
          />
        </div>
      )}
    </div>
  );
};

export default HotelDisplay;
