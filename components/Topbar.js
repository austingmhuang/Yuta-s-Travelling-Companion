import styles from "../styles/Topbar.module.css";
import Link from "next/link";

const Topbar = ({ user, loading = false }) => {
  return (
    <div className={styles.Topbar}>
      <div className={styles.wrapper}>
        <Link href="/">
          <img
            id={styles.TopbarLogo}
            src="images/profile.jpg"
            alt="logo image"
          />
        </Link>
        <Link href="/about">
          {/* <i class="fas fa-address-card" className={styles.login}>About&nbsp;&nbsp;&nbsp;</i>
           */}
          <a>
            <i class="fas fa-address-card" className={styles.login}></i>
            About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </Link>
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
