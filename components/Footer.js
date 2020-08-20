import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img id={styles.footerLogo} src="images/profile.jpg"></img>
    </div>
  );
};

export default Footer;
