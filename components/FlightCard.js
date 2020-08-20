import styles from "../styles/FlightCard.module.css";

const FlightCard = () => {
  return (
    <div className={styles.FlightCard}>
      <div className={styles.flightInformation}>
        <h1>Flight Information:</h1>
      </div>
      <div className={styles.airlineAndAirport}>
        <div>
          <h2>ORIGIN</h2>
        </div>
        <div>
          <h3>DATE</h3>
        </div>
        <div>
          <h2>DESTINATION</h2>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;

// countries
// Minimum filght (cheapest one)

// airline
// airports (origin departure)
// Airport code
// date
