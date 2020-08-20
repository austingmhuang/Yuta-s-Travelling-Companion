import WhereTo from "./WhereTo";
import styles from "../styles/Main.module.css";
import Button from "./SendButton";
import { useState } from "react";
import PlaneView from "./PlaneView";
import InformationView from "./InformationView";
import Weather from "./Weather";

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
      {view === "PlaneView" ? <PlaneView /> : <InformationView />}
    </>
  );
};

export default Main;
