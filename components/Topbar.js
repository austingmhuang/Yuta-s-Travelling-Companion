import styles from "../styles/Topbar.module.css";

const Topbar = () => {
  return (
    <div className={styles.Topbar}>
      <img
        id={styles.TopbarLogo}
        src="images/profile.jpg"
        alt="logo image"
      ></img>
      <button id={styles.LoginButton}>
        <img src="images/log.png" alt="login" />
      </button>
    </div>
  );
};

export default Topbar;
