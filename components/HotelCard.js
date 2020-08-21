import styles from "../styles/HotelCard.module.css";

const HotelCard = props => {
  console.log("props in card", props);
  return (
    <div className={styles.card}>
      <img
        id={styles.hotelImg}
        src={props.imgUrl}
        alt="logo image"
        className={styles.img}
      ></img>
      <h3 className={styles.hotelName}>{props.hotelName}</h3>
      <p>Rating: {props.hotelRating} </p>
      <p>Address: {props.hotelAddress} </p>
      <p>Price: {props.hotelRating} </p>
    </div>
  );
};

export default HotelCard;

//name, thumbnailUrl, starRating, address, ratePlan.price.current
