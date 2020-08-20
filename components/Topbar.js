import Weather from "./Weather";
import styles from "../styles/Topbar.module.css";

const Topbar = () => {
  return (
    <div className={styles.Topbar}>
      <img
        id={styles.TopbarLogo}
        src="images/profile.jpg"
        alt="logo image"
      ></img>
      <Weather />
      <button id={styles.LoginButton}>
        <img src="images/log.png" alt="login" />
      </button>
    </div>
  );
};

export default Topbar;

{
  /* <nav>
<ul>
  <li>
    <Link href="/">
      <a>Home</a>
    </Link>
  </li>
  <li>
    <Link href="/about">
      <a>About</a>
    </Link>
  </li>
  {!loading &&
    (user ? (
      <>
        <li>
          <Link href="/profile">
            <a>Client-rendered profile</a>
          </Link>
        </li>
        <li>
          <Link href="/advanced/ssr-profile">
            <a>Server rendered profile (advanced)</a>
          </Link>
        </li>
        <li>
          <a href="/api/logout">Logout</a>
        </li>
      </>
    ) : (
      <li>
        <a href="/api/login">Login</a>
      </li>
    ))}
</ul>
</nav>

<style jsx>{`
header {
  padding: 0.2rem;
  color: #fff;
  background-color: #333;
}
nav {
  max-width: 42rem;
  margin: 1.5rem auto;
}
ul {
  display: flex;
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
li {
  margin-right: 1rem;
}
li:nth-child(2) {
  margin-right: auto;
}
a {
  color: #fff;
  text-decoration: none;
}
button {
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  border: none;
  background: none;
}
`}</style> */
}
