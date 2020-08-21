// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchFlight } from "../lib/flight";
import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";
import Link from "next/link";
import styles from "../styles/FlightCard.module.css";
import mainStyles from "../styles/Main.module.css";
import Topbar from "../components/Topbar";
import FlightCard from "../components/FlightCard";
import FlightCards from "../components/FlightCards";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      borderColor: "#94DFDA",
      color: "#94DFDA",
      fontWeight: 800,
      marginBottom: "8px",
      textAlign: "center",
      "&:hover": {
        backgroundColor: "#94DFDA",
        color: "#fff"
      }
    }
  })
);

const ButtonLink = ({ className, href, hrefAs, children, prefetch }) => (
  <Link href={href} as={hrefAs} prefetch>
    <a className={className}>{children}</a>
  </Link>
);

// function FlightCard({ flight }) {
//   return (
//     <>
//       <div className={styles.FlightCard}>
//         <h4>
//           Leaving from: {flight.Places[0].Name} Going to:{" "}
//           {flight.Places[1].Name}
//         </h4>
//         <div>
//           <h4>Airline: {flight.Carriers[0].Name}</h4>
//           <h3>Departure date: </h3>
//           <p>{flight.Quotes[0].QuoteDateTime}</p>
//           <p>
//             {flight.Places[0].IataCode} - {flight.Places[1].IataCode}
//           </p>
//           <h5>Cheapest price USD: $ {flight.Quotes[0].MinPrice}</h5>
//         </div>
//       </div>
//     </>
//   );
// }

function Flight() {
  const { flight, loadingFlight } = useFetchFlight();
  const { user, loading } = useFetchUser();
  const classes = useStyles();

  return (
    <>
      <Topbar user={user} loading={loading} />
      <Layout user={user} loading={loading}>
        {loadingFlight ? <>Loading...</> : <FlightCards flight={flight} />}
        <div className={mainStyles.tripButton}>
          <Button
            variant="outlined"
            component={ButtonLink}
            href={"/hotel"}
            className={classes.button}
          >
            Hotels
          </Button>
        </div>
      </Layout>
    </>
  );
}

export default Flight;
