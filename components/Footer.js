import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img id={styles.footerLogo} src="images/profile.jpg"></img>
      <p className={styles.copyright}>
        ©2020 Yuta's<br></br>Travel Companion{" "}
      </p>
    </div>
  );
};

export default Footer;
