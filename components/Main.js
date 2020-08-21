import WhereTo from "./WhereTo";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import PlaneView from "./PlaneView";
import InformationView from "./InformationView";
import styles from "../styles/Main.module.css";
import Link from "next/link";

const ButtonLink = ({ className, href, hrefAs, children, prefetch }) => (
  <Link href={href} as={hrefAs} prefetch>
    <a className={className}>{children}</a>
  </Link>
);

const Main = ({ user }) => {
  const [view, setView] = useState("PlaneView");
  //way to access user's location user['https://example.com/geoip'].country_code);
  //console.log(user["https://example.com/geoip"].country_name);

  const goToTripView = current => {
    if (current === "PlaneView") {
      setView("TripView");
    } else {
      setView("PlaneView");
    }
  };

  return (
    <>
      {user ? (
        <p>
          Where are you flying, {user.name}🤣 Your location:{" "}
          {user["https://example.com/geoip"].country_name}
        </p>
      ) : (
        <h1>Please login!</h1>
      )}
      <WhereTo />
      <div className={styles.tripButton}>
        <Button variant="outlined" component={ButtonLink} href={"/flight"}>
          Trip Me
        </Button>
      </div>
      {view === "PlaneView" ? <PlaneView /> : <InformationView />}
    </>
  );
};

//        <Button text="Trip Me!" view={view} func={goToTripView} />
export default Main;
