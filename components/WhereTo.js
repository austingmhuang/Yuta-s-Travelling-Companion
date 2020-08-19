import TextAndInputField from "./TextAndInputField";
import styles from "../styles/WhereTo.module.css";

const WhereTo = () => {
  return (
    <div className={styles.inlineBox}>
      <TextAndInputField
        text="Leaving from"
        placeholder="introduce your destination"
      />
      <TextAndInputField text="Flying to" placeholder="introduce your origin" />
      <TextAndInputField text="Date" placeholder="introduce your time" />
    </div>
  );
};

export default WhereTo;
