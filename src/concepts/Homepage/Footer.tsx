import styles from "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.announcements_container}>
        <div className={styles.date}>Out now</div>
        <span className={styles.follow_subscribe}>
          For all announcements, follow/subscribe:
        </span>
        <button className={styles.mailing_list}>Rockstar Mailing List</button>
        <div className={styles.social_links}>
          <a
            className={styles.icon_link}
            target="_blank"
            href="https://www.facebook.com/rockstargames"
          >
            <img src="icons/facebook.svg" className={styles.wtf} />
          </a>
          <a
            className={styles.icon_link}
            target="_blank"
            href="https://twitter.com/rockstargames"
          >
            <img src="icons/twitter.svg" />
          </a>
          <a
            className={styles.icon_link}
            target="_blank"
            href="https://instagram.com/rockstargames"
          >
            <img src="icons/instagram.svg" />
          </a>
          <a
            className={styles.icon_link}
            target="_blank"
            href="http://youtube.com/rockstargames"
          >
            <img src="icons/youtube.svg" />
          </a>
          <a
            className={styles.icon_link}
            target="_blank"
            href="https://twitch.tv/rockstargames"
          >
            <img src="icons/twitch.svg" />
          </a>
        </div>
      </div>

      <div className={styles.parental_rating_container}>
        <a className={styles.parental_rating}>
          <img src="homepage/parental_rating.svg" />
        </a>
      </div>

      <div className={styles.rockstar_container}>
        <a target="_blank" className={styles.rockstar_symbol}>
          <img src="icons/rockstar.svg" />
        </a>
      </div>
    </footer>
  );
};

export { Footer };
