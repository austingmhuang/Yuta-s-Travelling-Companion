import FlightCard from "./FlightCard";
import FlightCard2 from "./FlightCard2";
import FlightCard3 from "./FlightCard3";
import FlightCard4 from "./FlightCard4";
import styles from "../styles/FlightCards.module.css";

const FlightCards = props => {
  return (
    <div className={styles.flightCards}>
      <FlightCard flight={props.flight} />
      <FlightCard2 flight={props.flight} />
      <FlightCard3 flight={props.flight} />
      <FlightCard4 flight={props.flight} />
    </div>
  );
};

export default FlightCards;
