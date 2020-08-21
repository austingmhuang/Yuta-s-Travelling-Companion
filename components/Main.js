import WhereTo from "./WhereTo";
import Button from "./SendButton";
import { useState } from "react";
import PlaneView from "./PlaneView";
import InformationView from "./InformationView";
import styles from "../styles/Main.module.css";

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
        <Button text="Trip Me!" view={view} func={goToTripView} />
      </div>
      {view === "PlaneView" ? <PlaneView /> : <InformationView />}
    </>
  );
};

export default Main;
