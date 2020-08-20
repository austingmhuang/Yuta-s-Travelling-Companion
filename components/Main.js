import WhereTo from "./WhereTo";
import Button from "./SendButton";
import { useState } from "react";
import PlaneView from "./PlaneView";
import InformationView from "./InformationView";
import styles from "../styles/Main.module.css";

const Main = ({ user }) => {
  const [view, setView] = useState("PlaneView");
  const [fromTextInput, setFromTextInput] = useState("");
  const [toTextInput, setToTextInput] = useState("");
  const [timeTextInput, setTimeTextInput] = useState("");

  const sendInputInfoAndChangeView = props => {
    const goToTripView = current => {
      if (current === "PlaneView") {
        setView("TripView");
      } else {
        setView("PlaneView");
      }
    };

    const makeTextInputsArray = () => {
      const textInputsArray = [];
      textInputsArray[0] = fromTextInput;
      textInputsArray[1] = toTextInput;
      textInputsArray[2] = timeTextInput;
      console.log(textInputsArray);
      return textInputsArray;
    };

    goToTripView(props);
    makeTextInputsArray();
  };

  return (
    <>
      {user ? (
        <h1>Where are you flying, {user.name}😊</h1>
      ) : (
        <h1>Please login!</h1>
      )}
      <WhereTo
        setFromTextInput={setFromTextInput}
        setToTextInput={setToTextInput}
        setTimeTextInput={setTimeTextInput}
      />
      <div className={styles.tripButton}>
        <Button text="Trip Me!" view={view} func={sendInputInfoAndChangeView} />
      </div>
      {view === "PlaneView" ? <PlaneView /> : <InformationView />}
    </>
  );
};

export default Main;
