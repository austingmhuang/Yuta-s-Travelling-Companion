// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchFlight } from "../lib/flight";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";

function FlightCard({ flight }) {
  console.log(flight.Places[0]);
  return (
    <>
      <h1>Profile</h1>

      <div>
        <h3>Profile (client rendered)</h3>
        <p>PlaceId: {flight.Places[0].PlaceId}</p>
        <p>PlaceName: {flight.Places[0].PlaceName}</p>
      </div>
    </>
  );
}

function Flight() {
  const { flight, loadingFlight } = useFetchFlight();
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      {loadingFlight ? <>Loading...</> : <FlightCard flight={flight} />}
    </Layout>
  );
}

export default Flight;
