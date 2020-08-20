import HotelCard from "./HotelCard";
import styles from "../styles/HotelDisplay.module.css";

const HotelDisplay = props => {
  const getDestinationIds = async location => {
    try {
      const res = await fetch(`http://localhost:3000/api/hotels/${location}`);
      const destinationIds = await res.json();
      return destinationIds;
    } catch (error) {
      return error;
    }
  };

  const getHotels = async (
    destinationIds,
    checkInDate,
    checkOutDate,
    persons
  ) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/hotels/results?destId=${destinationIds}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&persons=${persons}`
      );
      const hotelData = await res.json();
      return hotelData;
    } catch (error) {
      return error;
    }
  };

  // getHotels("45", "2020-01-08", "2020-01-15", "1");

  return (
    <div className={styles.hotelDisplay}>
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </div>
  );
};

export default HotelDisplay;
