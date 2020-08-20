import styles from "../styles/HotelCard.module.css";

const HotelCard = () => {
  return (
    <div className={styles.card}>
      <img id={styles.hotelImg} src="images/profile.jpg" alt="logo image"></img>
      <h3 className={styles.hotelName}>Hotel Name</h3>
      <p>Rating: </p>
      <p>Address: </p>
      <p>Price: </p>
    </div>
  );
};

export default HotelCard;

//name, thumbnailUrl, starRating, address, ratePlan.price.current
