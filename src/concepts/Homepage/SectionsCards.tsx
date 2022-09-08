import styles from "./styles/SectionCards.module.scss";

const sections = [
  {
    name: "Pc Release",
    path: "/homepage/pc_release.jpg",
    mask: "/homepage/pc_release_mask.png",
  },
  {
    name: "Reviews",
    path: "/homepage/reviews.jpg",
    mask: "/homepage/reviews_mask.png",
  },
  {
    name: "Red Dead Online",
    path: "/homepage/red_dead_online.jpg",
    mask: "/homepage/reviews_mask.png",
  },
  {
    name: "Weaponry",
    path: "/homepage/weaponry.jpg",
    mask: "/homepage/reviews_mask.png",
  },
  {
    name: "Special & Ultimate Editions",
    path: "/homepage/special_ultimate_editions.jpg",
    mask: "/homepage/reviews_mask.png",
  },
  {
    name: "Gameplay Video Part 2",
    path: "/homepage/gameplay_video_2.jpg",
    mask: "/homepage/reviews_mask.png",
  },
  {
    name: "The Van Der Linde Gang",
    path: "/homepage/van_der_linde_gang.jpg",
    mask: "/homepage/reviews_mask.png",
  },
  {
    name: "Wildlife",
    path: "/homepage/wild_life.jpg",
    mask: "/homepage/reviews_mask.png",
  },
  {
    name: "Soundtrack",
    path: "/homepage/soundtrack.jpg",
    mask: "/homepage/reviews_mask.png",
  },
];

const SectionCards = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(/homepage/reviews.jpg)` }}
      />
      <span className={styles.title}>Reviews</span>
    </div>
  );
};

export { SectionCards };
