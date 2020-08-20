import styles from "../styles/Topbar.module.css";

const Topbar = ({ user, loading = false }) => {
  return (
    <div className={styles.Topbar}>
      <img
        id={styles.TopbarLogo}
        src="images/profile.jpg"
        alt="logo image"
      ></img>
      {!loading &&
        (user ? (
          <>
            <a href="/api/logout">
              Logout{" "}
              <i class="fas fa-sign-out-alt" className={styles.login}></i>
            </a>
          </>
        ) : (
          <a href="/api/login">
            Login <i class="fas fa-sign-in-alt" className={styles.login}></i>
          </a>
        ))}
    </div>
  );
};

export default Topbar;
