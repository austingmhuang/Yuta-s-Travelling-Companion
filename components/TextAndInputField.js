import styles from "../styles/TextAndInputField.module.css";

const TextAndInputField = props => {
  return (
    <div>
      <p className={styles.text}>{props.text}</p>
      <input
        className={styles.input}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextAndInputField;
