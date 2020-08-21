import FromTextAndInputField from "./FromTextAndInputField";
import ToTextAndInputField from "./ToTextAndInputField";
import TimeTextAndInputField from "./TimeTextAndInputField";
import styles from "../styles/WhereTo.module.css";

const WhereTo = props => {
  return (
    <div className={styles.inlineBox}>
      <FromTextAndInputField
        placeholder={<i class="fas fa-plane-departure"> Leaving from</i>}
        setFromTextInput={props.setFromTextInput}
      />
      <ToTextAndInputField
        placeholder={<i class="fas fa-plane-arrival"> Going to</i>}
        setToTextInput={props.setToTextInput}
      />
      <TimeTextAndInputField
        placeholder={<i class="fas fa-clock"> Date</i>}
        setTimeTextInput={props.setTimeTextInput}
      />
    </div>
  );
};

export default WhereTo;
