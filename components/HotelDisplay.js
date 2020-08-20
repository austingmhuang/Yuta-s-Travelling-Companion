import HotelCard from "./HotelCard";
import styles from "../styles/HotelDisplay.module.css";

const HotelDisplay = () => {
  return (
    <div className={styles.hotelDisplay}>
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </div>
  );
};

export default HotelDisplay;
