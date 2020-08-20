import FromTextAndInputField from "./FromTextAndInputField";
import ToTextAndInputField from "./ToTextAndInputField";
import TimeTextAndInputField from "./TimeTextAndInputField";
import styles from "../styles/WhereTo.module.css";

const WhereTo = props => {
  return (
    <div className={styles.inlineBox}>
      <FromTextAndInputField
        text="Leaving from"
        placeholder="🛫"
        setFromTextInput={props.setFromTextInput}
      />
      <ToTextAndInputField
        text="Flying to"
        placeholder="🛬"
        setToTextInput={props.setToTextInput}
      />
      <TimeTextAndInputField
        text="Date"
        placeholder="🛬"
        setTimeTextInput={props.setTimeTextInput}
      />
    </div>
  );
};

export default WhereTo;
