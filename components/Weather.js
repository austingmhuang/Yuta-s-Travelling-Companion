import styles from "../styles/Weather.module.css";

const Weather = () => {
  return (
    <div className={styles.Weather}>
      <img
        className={styles.weatherIcon}
        src="images/weather-icon.png"
        alt="weather icon"
      />
      <div className={styles.locTemp}>
        <p> Tokyo Cº40</p>
      </div>
    </div>
  );
};

export default Weather;
