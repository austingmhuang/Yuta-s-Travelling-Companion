// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchHotel } from "../lib/hotels";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import styles from "../styles/HotelCard.module.css";
import Spinner from "../components/Spinner";

function HotelCard({ hotel }) {
  console.log("hotel in page", hotel);
  return (
    <div className={styles.card}>
      <img
        id={styles.hotelImg}
        src="https://exp.cdn-hotels.com/hotels/20000000/19800000/19794400/19794327/b02255b8_l.jpg"
        alt="logo image"
        className={styles.img}
      ></img>
      <h3 className={styles.hotelName}>{hotel[0].name}</h3>
      <p>Rating: {hotel[0].guestReviews.rating} </p>
      <p>
        Address: {hotel[0].address.streetAddress}, {hotel[0].address.postalCode}{" "}
        {hotel[0].address.locality}{" "}
      </p>
      <p>Price: {hotel[0].ratePlan.price.current} </p>
    </div>
  );
}
function Hotel() {
  const { hotel, loadingHotel } = useFetchHotel();
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      {loadingHotel ? (
        <Spinner />
      ) : (
        <HotelCard hotel={hotel.data.body.searchResults.results} />
      )}
    </Layout>
  );
}
export default Hotel;
