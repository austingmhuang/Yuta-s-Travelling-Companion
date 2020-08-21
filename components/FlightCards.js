import FlightCard from "./FlightCard";
import styles from "../styles/FlightCards.module.css";

const FlightCards = props => {
  return (
    <div className={styles.flightCards}>
      <FlightCard flight={props.flight} />
      <FlightCard flight={props.flight} />
      <FlightCard flight={props.flight} />
      <FlightCard flight={props.flight} />
    </div>
  );
};

export default FlightCards;
