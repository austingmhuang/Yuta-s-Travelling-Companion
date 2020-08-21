// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchFlight } from "../lib/flight";
import Layout from "../components/layout";
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

//        <div className={styles.card}>
//         <img
//           id={styles.hotelImg}
//           src="https://www.travelstart.co.za/blog/wp-content/uploads/2018/05/standby-tickets-1.jpg"
//           alt="logo image"
//           className={styles.img}
//         ></img>
//         <h4>Leaving from: {flight.Places[0].Name} Going to: {flight.Places[1].Name}</h4>
//         <h4>Airline: {flight.Carriers[0].Name}</h4>
//         <h3>Departure date: </h3>
//         <p>{flight.Quotes[0].QuoteDateTime}
//           ,{" "}
//         </p>
//         <p>
//           {flight.Places[0].IataCode} - {flight.Places[1].IataCode}
//         </p>
//         <h5>Cheapest price USD: $ {flight.Quotes[0].MinPrice}</h5>
//       </div>

//       <div className={styles.card}>
//         <img
//           id={styles.hotelImg}
//           src="https://www.racq.com.au/-/media/racqgroupmvc/feature/article/featuredimages/holiday/technology_the-best-apps-for-finding-cheap-flights_1.jpg?h=487&w=800&hash=753BD0B80F1B19E6D263C21B5958A61A5686DF78"
//           alt="logo image"
//           className={styles.img}
//         ></img>
//         <h4>Leaving from: {flight.Places[1].Name} Going to: {flight.Places[2].Name}</h4>
//         <h4>Airline: {flight.Carriers[1].Name}</h4>
//         <h3>Departure date: </h3>
//         <p>{flight.Quotes[0].QuoteDateTime}
//           ,{" "}
//         </p>
//         <p>
//           {flight.Places[1].IataCode} - {flight.Places[2].IataCode}
//         </p>
//         <h5>Cheapest price USD: $ {flight.Quotes[1].MinPrice}</h5>
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
