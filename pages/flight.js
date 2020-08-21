// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchFlight } from "../lib/flight";
import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";
import Link from "next/link";
import styles from "../styles/FlightCard.module.css";
import Topbar from "../components/Topbar";

function FlightCard({ flight }) {
  return (
    <>
      <div className={styles.FlightCard}>
        <h4>
          Leaving from: {flight.Places[0].Name} Going to:{" "}
          {flight.Places[1].Name}
        </h4>
        <div>
          <h4>Airline: {flight.Carriers[0].Name}</h4>
          <h3>Departure date: </h3>
          <p>{flight.Quotes[0].QuoteDateTime}</p>
          <p>
            {flight.Places[0].IataCode} - {flight.Places[1].IataCode}
          </p>
          <h5>Cheapest price USD: $ {flight.Quotes[0].MinPrice}</h5>
        </div>
      </div>
    </>
  );
}

function Flight() {
  const { flight, loadingFlight } = useFetchFlight();
  const { user, loading } = useFetchUser();

  return (
    <>
      <Topbar user={user} loading={loading} />
      <Layout user={user} loading={loading}>
        {loadingFlight ? <>Loading...</> : <FlightCard flight={flight} />}
        <Link href="/hotel">
          <button type="button">What hotels?</button>
        </Link>
      </Layout>
    </>
  );
}

export default Flight;
