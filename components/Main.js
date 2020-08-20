import WhereTo from "./WhereTo";
import Button from "./SendButton";
import { useState } from "react";
import PlaneView from "./PlaneView";
import InformationView from "./InformationView";

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
        <p>Where are you flying, {user.name}🤣</p>
      ) : (
        <h1>Please login!</h1>
      )}
      <WhereTo />
      <Button text="Trip Me!" view={view} func={goToTripView} />
      {view === "PlaneView" ? <PlaneView /> : <InformationView />}
    </>
  );
};

export default Main;
