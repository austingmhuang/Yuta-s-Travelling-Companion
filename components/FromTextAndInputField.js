import styles from "../styles/textAndInputField.module.css";
import FromTextInput from "./FromTextInput";

const FromTextAndInputField = props => {
  return (
    <div>
      <p className={styles.text}>{props.text}</p>
      <FromTextInput
        placeholder={props.placeholder}
        setFromTextInput={props.setFromTextInput}
      />
    </div>
  );
};

export default FromTextAndInputField;
