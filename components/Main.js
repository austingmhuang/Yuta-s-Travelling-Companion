import WhereTo from "./WhereTo";
import Button from "./SendButton";
import { useState } from "react";
import PlaneView from "./PlaneView";
import InformationView from "./InformationView";
import Weather from "./Weather";

const Main = ({ user }) => {
  const [view, setView] = useState("PlaneView");
  //way to access user's location user['https://example.com/geoip'].country_code);
  console.log(user["https://example.com/geoip"].country_code);

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
          Where are you flying, {user.name}🤣 {user.last_ip}
        </p>
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
