import WhereTo from "./WhereTo";
import Button from "./SendButton";
import { useState } from "react";
import PlaneView from "./PlaneView";
import InformationView from "./InformationView";
import styles from "../styles/Main.module.css";

const Main = ({ user }) => {
  const [view, setView] = useState("PlaneView");

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
        <h1>Where are you flying, {user.name}😊</h1>
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
