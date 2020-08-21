// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchHotel } from "../lib/hotels";
import Layout from "../components/layout";
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
          src="https://exp.cdn-hotels.com/hotels/43000000/42290000/42287800/42287796/1c671a3f_l.jpg"
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
          src="https://exp.cdn-hotels.com/hotels/8000000/7810000/7807600/7807544/8e06e435_l.jpg"
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
          src="https://exp.cdn-hotels.com/hotels/24000000/23690000/23688300/23688269/363a1b82_l.jpg"
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

      <div className={styles.card}>
        <img
          id={styles.hotelImg}
          src="https://exp.cdn-hotels.com/hotels/20000000/19120000/19117200/19117122/928b0413_l.jpg"
          alt="logo image"
          className={styles.img}
        ></img>
        <h3 className={styles.hotelName}>{hotel[3].name}</h3>
        <p>Rating: {hotel[3].guestReviews.rating} </p>
        <p>
          Address: {hotel[3].address.streetAddress},{" "}
          {hotel[3].address.postalCode}
          {hotel[3].address.locality}
        </p>
        <p>Price: {hotel[3].ratePlan.price.current} </p>
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
