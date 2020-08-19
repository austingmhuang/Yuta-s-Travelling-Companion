import WhereTo from "./WhereTo";
import styles from "../styles/Main.module.css";
import Button from "./SendButton";
import FlightDisplay from "./FlightDisplay";
import HotelDisplay from "./HotelDisplay";
import { useState } from "react";
import PlaneView from "./PlaneView";
import InformationView from "./InformationView";

const Main = () => {
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
      <WhereTo />
      <Button
        text="Trip Me!"
        className={styles.tripButton}
        view={view}
        func={goToTripView}
      />
      <FlightDisplay />
      <HotelDisplay />
      {view === "PlaneView" ? <PlaneView /> : <InformationView />}
    </>
  );
};

export default Main;
