import styles from "./styles/Footer.module.scss";

const socialMedias = [
  {
    name: "facebook",
    ref: "https://www.facebook.com/rockstargames",
    image: "icons/facebook.svg",
  },
  {
    name: "twitter",
    ref: "https://twitter.com/rockstargames",
    image: "icons/twitter.svg",
  },
  {
    name: "instagram",
    ref: "https://instagram.com/rockstargames",
    image: "icons/instagram.svg",
  },
  {
    name: "youtube",
    ref: "http://youtube.com/rockstargames",
    image: "icons/youtube.svg",
  },
  {
    name: "twitch",
    ref: "https://twitch.tv/rockstargames",
    image: "icons/twitch.svg",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.announcements_container}>
        <p className={styles.date}>Out now</p>
        <span className={styles.follow_subscribe}>
          For all announcements, follow/subscribe:
        </span>
        <button className={styles.mailing_list}>Rockstar Mailing List</button>
        <div className={styles.social_links}>
          {socialMedias.map(({ ref, image, name }) => (
            <a
              key={ref}
              rel="noreferrer"
              className={`${styles.icon_link} ${styles.hover_link}`}
              target="_blank"
              href={ref}
            >
              <picture>
                <img src={image} alt={name} width="30px" height="35px" />
              </picture>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.parental_rating_container}>
        <a
          className={styles.parental_rating}
          href="http://www.rockstargames.com/"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <img
              alt="parental rating"
              src="homepage/parental_rating.svg"
              width="177px"
              height="94px"
            />
          </picture>
        </a>
      </div>

      <div className={styles.rockstar_container}>
        <a
          className={styles.rockstar_symbol}
          href="https://www.esrb.org/"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <img
              src="icons/rockstar.svg"
              alt="rockstar icon"
              width="79px"
              height="73px"
            />
          </picture>
        </a>
      </div>
    </footer>
  );
};

export { Footer };
