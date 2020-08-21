// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchHotel } from "../lib/hotels";
import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";
import styles from "../styles/HotelCard.module.css";
import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";

function HotelCard({ hotel }) {
  console.log("hotel in page", hotel);

  return (
    <>
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
          Address: {hotel[0].address.streetAddress},{" "}
          {hotel[0].address.postalCode}
          {hotel[0].address.locality}
        </p>
        <p>Price: {hotel[0].ratePlan.price.current} </p>
      </div>

      <div className={styles.card}>
        <img
          id={styles.hotelImg}
          src="https://exp.cdn-hotels.com/hotels/16000000/15700000/15691900/15691811/518377e8_l.jpg"
          alt="logo image"
          className={styles.img}
        ></img>
        <h3 className={styles.hotelName}>{hotel[1].name}</h3>
        <p>Rating: {hotel[1].guestReviews.rating} </p>
        <p>
          Address: {hotel[1].address.streetAddress},{" "}
          {hotel[1].address.postalCode}
          {hotel[1].address.locality}
        </p>
        <p>Price: {hotel[1].ratePlan.price.current} </p>
      </div>
      <div className={styles.card}>
        <img
          id={styles.hotelImg}
          src="https://exp.cdn-hotels.com/hotels/3000000/2910000/2906500/2906474/10b8d62a_l.jpg"
          alt="logo image"
          className={styles.img}
        ></img>
        <h3 className={styles.hotelName}>{hotel[2].name}</h3>
        <p>Rating: {hotel[2].guestReviews.rating} </p>
        <p>
          Address: {hotel[2].address.streetAddress},{" "}
          {hotel[2].address.postalCode}
          {hotel[2].address.locality}
        </p>
        <p>Price: {hotel[2].ratePlan.price.current} </p>
      </div>
    </>
  );
}
function Hotel() {
  const { hotel, loadingHotel } = useFetchHotel();
  const { user, loading } = useFetchUser();
  return (
    <>
      <Topbar user={user} loading={loading} />
      <Layout user={user} loading={loading}>
        {loadingHotel ? (
          <Spinner />
        ) : (
          <HotelCard hotel={hotel.data.body.searchResults.results} />
        )}
      </Layout>
    </>
  );
}
export default Hotel;
