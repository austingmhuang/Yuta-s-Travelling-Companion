import WhereTo from "./WhereTo";
import styles from "../styles/Main.module.css";
import Button from "./SendButton";

const Main = () => {
  return (
    <>
      <div className={styles.whereTo}>
        <WhereTo />
      </div>
      <Button text="Trip Me!" />
    </>
  );
};

export default Main;
