import TextAndInputField from "./TextAndInputField";
import styles from "../styles/WhereTo.module.css";

const WhereTo = () => {
  return (
    <div className={styles.inlineBox}>
      <TextAndInputField text="Leaving from" placeholder="🛫" />
      <TextAndInputField text="Flying to" placeholder="🛬" />
      <TextAndInputField text="Date" placeholder="⏱" />
    </div>
  );
};

export default WhereTo;
