import styles from "../styles/textAndInputField.module.css";
import TimeTextInput from "./TimeTextInput";

const TimeTextAndInputField = props => {
  return (
    <div>
      <p className={styles.text}>{props.text}</p>
      <TimeTextInput
        placeholder={props.placeholder}
        setTimeTextInput={props.setTimeTextInput}
      />
    </div>
  );
};

export default TimeTextAndInputField;
