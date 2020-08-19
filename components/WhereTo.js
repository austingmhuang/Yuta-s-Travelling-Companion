import TextAndInputField from "./TextAndInputField";
import styles from "../styles/WhereTo.module.css";

const WhereTo = () => {
  return (
    <div className={styles.inlineBox}>
      <TextAndInputField
        id={styles.box1}
        text="Leaving from"
        placeholder="introduce your destination"
      />
      <TextAndInputField
        id={styles.box2}
        text="Flying to"
        placeholder="introduce your origin"
      />
      <TextAndInputField
        id={styles.box3}
        text="Date"
        placeholder="introduce your time"
      />
    </div>
  );
};

export default WhereTo;
