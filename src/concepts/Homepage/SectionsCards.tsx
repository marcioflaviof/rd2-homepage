import { Card } from "./Card";
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
    mask: "/homepage/red_dead_online_mask.png",
  },
  {
    name: "Weaponry",
    path: "/homepage/weaponry.jpg",
    mask: "/homepage/weaponry_mask.png",
  },
  {
    name: "Special & Ultimate Editions",
    path: "/homepage/special_ultimate_editions.jpg",
    mask: "/homepage/special_ultimate_editions_mask.png",
  },
  {
    name: "Gameplay Video Part 2",
    path: "/homepage/gameplay_video_2.jpg",
    mask: "/homepage/gameplay_video_2_mask.png",
  },
  {
    name: "The Van Der Linde Gang",
    path: "/homepage/van_der_linde_gang.jpg",
    mask: "/homepage/van_der_linde_gang_mask.png",
  },
  {
    name: "Wildlife",
    path: "/homepage/wild_life.jpg",
    mask: "/homepage/wild_life_mask.png",
  },
  {
    name: "Soundtrack",
    path: "/homepage/soundtrack.jpg",
    mask: "/homepage/soundtrack_mask.png",
  },
];

const SectionCards = () => {
  return (
    <section className={styles.container}>
      {sections.map(({ name, path, mask }) => (
        <Card name={name} key={name} mask={mask} image={path} />
      ))}
    </section>
  );
};

export { SectionCards };
