import styles from "../styles/textAndInputField.module.css";
import ToTextInput from "./ToTextInput";

const ToTextAndInputField = props => {
  return (
    <div>
      <p className={styles.text}>{props.text}</p>
      <ToTextInput
        placeholder={props.placeholder}
        setToTextInput={props.setToTextInput}
      />
    </div>
  );
};

export default ToTextAndInputField;
