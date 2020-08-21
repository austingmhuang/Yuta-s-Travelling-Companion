import WhereTo from "./WhereTo";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import PlaneView from "./PlaneView";
import InformationView from "./InformationView";
import styles from "../styles/Main.module.css";
import Link from "next/link";
import { makeStyles, createStyles } from "@material-ui/core/styles";

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

const Main = ({ user }) => {
  const [view, setView] = useState("PlaneView");
  const [fromTextInput, setFromTextInput] = useState(undefined);
  const [toTextInput, setToTextInput] = useState(undefined);
  const [timeTextInput, setTimeTextInput] = useState(undefined);

  const makeTextInputsArray = () => {
    const textInputsArray = [];
    textInputsArray[0] = fromTextInput;
    textInputsArray[1] = toTextInput;
    textInputsArray[2] = timeTextInput;
    console.log(textInputsArray);
    return textInputsArray;
  };

  const goToTripView = (function() {
    let executed = false;
    return function() {
      if (!executed) {
        executed = true;
        setView("TripView");
      }
    };
  })();

  const sendInputInfoAndChangeView = () => {
    goToTripView();
    makeTextInputsArray();
  };

  const classes = useStyles();

  return (
    <>
      {user ? (
        <h2 className={styles.greeting}>
          Where are you flying, {user.name}😊 Your location:{" "}
          {user["https://example.com/geoip"].country_name}
        </h2>
      ) : (
        <h2 className={styles.greeting}>Please login!</h2>
      )}
      <WhereTo
        setFromTextInput={setFromTextInput}
        setToTextInput={setToTextInput}
        setTimeTextInput={setTimeTextInput}
      />
      <div className={styles.tripButton}>
        <Button
          variant="outlined"
          component={ButtonLink}
          href={"/flight"}
          className={classes.button}
        >
          Trip Me
        </Button>
      </div>
      {view === "PlaneView" ? <PlaneView /> : <InformationView />}
    </>
  );
};

export default Main;
