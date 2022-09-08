import styles from "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.parental_rating_container}>
        <a className={styles.parental_rating} />
      </div>

      <div className={styles.announcements_container}>
        <div className={styles.date}>Out now</div>
        <div className={styles.follow_subscribe}>
          For all announcements, follow/subscribe:
        </div>
        <a className={styles.mailing_list}>Rockstar Mailing List</a>
        <div className={styles.social_links}>
          <a
            className={styles.facebook}
            target="_blank"
            href="https://www.facebook.com/rockstargames"
          />
          <a
            className={styles.twitter}
            target="_blank"
            href="https://twitter.com/rockstargames"
          />
          <a
            className={styles.instagram}
            target="_blank"
            href="https://instagram.com/rockstargames"
          />
          <a
            className={styles.youtube}
            target="_blank"
            href="http://youtube.com/rockstargames"
          />
          <a
            className={styles.twitch}
            target="_blank"
            href="https://twitch.tv/rockstargames"
          />
        </div>
      </div>
      <div className={styles.rockstar_container}>
        <a target="_blank" className={styles.rockstar_symbol} />
      </div>
    </footer>
  );
};

export { Footer };
