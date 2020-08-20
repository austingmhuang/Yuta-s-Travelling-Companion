import FlightCard from "./FlightCard";
import styles from "../styles/FlightDisplay.module.css";

const FlightDisplay = () => {
  return (
    <div className={styles.FlightDisplay}>
      <FlightCard />
    </div>
  );
};

export default FlightDisplay;
