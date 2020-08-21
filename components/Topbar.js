import styles from "../styles/Topbar.module.css";
import Link from "next/link";

//      <Weather />

const Topbar = ({ user, loading = false }) => {
  return (
    <div className={styles.Topbar}>
      <div className={styles.wrapper}>
        <img
          id={styles.TopbarLogo}
          src="images/profile.jpg"
          alt="logo image"
        ></img>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/flight">
            <a>Flights</a>
          </Link>
        </li>
        {!loading &&
          (user ? (
            <>
              <li>
                <a href="/api/logout">
                  Logout{" "}
                  <i class="fas fa-sign-out-alt" className={styles.login}></i>
                </a>
              </li>
            </>
          ) : (
            <a href="/api/login">
              Login <i class="fas fa-sign-in-alt" className={styles.login}></i>
            </a>
          ))}
      </div>
    </div>
  );
};

export default Topbar;
