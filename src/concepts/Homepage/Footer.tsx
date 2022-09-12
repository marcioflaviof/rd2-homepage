import styles from "./styles/Footer.module.scss";

const socialMedias = [
  {
    ref: "https://www.facebook.com/rockstargames",
    image: "icons/facebook.svg",
  },
  {
    ref: "https://twitter.com/rockstargames",
    image: "icons/twitter.svg",
  },
  {
    ref: "https://instagram.com/rockstargames",
    image: "icons/instagram.svg",
  },
  {
    ref: "http://youtube.com/rockstargames",
    image: "icons/youtube.svg",
  },
  {
    ref: "https://twitch.tv/rockstargames",
    image: "icons/twitch.svg",
  },
];

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
          {socialMedias.map(({ ref, image }) => (
            <a
              className={`${styles.icon_link} ${styles.hover_link}`}
              target="_blank"
              href={ref}
            >
              <img src={image} />
            </a>
          ))}
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
