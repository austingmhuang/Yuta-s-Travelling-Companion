import styles from "../styles/Topbar.module.css";

const Topbar = () => {
  return (
    <div className={styles.Topbar}>
      <img
        id={styles.TopbarLogo}
        src="images/profile.jpg"
        alt="logo image"
      ></img>
      <a href="#">
        Login <i class="fas fa-sign-in-alt" className={styles.login}></i>
      </a>
    </div>
  );
};

export default Topbar;
