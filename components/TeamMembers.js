import styles from "../styles/TeamMembers.module.css";

const TeamMembers = () => {
  return (
    <div className={styles.TeamMembers}>
      <div className={styles.memberInfo}>
        <img
          className={styles.member}
          src="images/austin.jpg"
          alt="avatar austin"
        ></img>
        <h1>Austin</h1>
        <a href="https://github.com/austingmhuang">GITHUB</a>
      </div>
      <div className={styles.memberInfo}>
        <img
          className={styles.member}
          src="images/jesus.jpg"
          alt="avatar jesus"
        ></img>
        <h1>Jesus</h1>
        <a href="https://github.com/eduru">GITHUB</a>
      </div>
      <div className={styles.memberInfo}>
        <img
          className={styles.member}
          src="images/florian.jpg"
          alt="avatar florian"
        ></img>
        <h1>Florian</h1>
        <a href="https://github.com/Ryukyo">GITHUB</a>
      </div>
      <div className={styles.memberInfo}>
        <img
          className={styles.member}
          src="images/yuta.jpeg"
          alt="avatar yuta"
        ></img>
        <h1>Yuta</h1>
        <a href="https://github.com/namitry">GITHUB</a>
      </div>
      <div className={styles.memberInfo}>
        <img
          className={styles.member}
          src="images/edu.jpg"
          alt="avatar edu"
        ></img>
        <h1>Edu</h1>
        <a href="https://github.com/eduru">GITHUB</a>
      </div>
    </div>
  );
};

export default TeamMembers;
