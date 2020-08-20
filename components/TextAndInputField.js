import styles from "../styles/textAndInputField.module.css";
import Text from "./Text";

const TextAndInputField = props => {
  return (
    <div>
      <p className={styles.text}>{props.text}</p>
      <Text placeholder={props.placeholder} />
    </div>
  );
};

export default TextAndInputField;
