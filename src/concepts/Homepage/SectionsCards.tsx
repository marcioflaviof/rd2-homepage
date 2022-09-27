import { Card } from "./Card";
import styles from "./styles/SectionCards.module.scss";

const sections = [
  {
    name: "Pc Release",
    path: "/rd2/homepage/pc_release_byd8i7.jpg",
    mask: "/rd2/homepage/pc_release_mask_rssvfs.png",
  },
  {
    name: "Reviews",
    path: "/rd2/homepage/reviews_mg6a8p.jpg",
    mask: "/rd2/homepage/reviews_mask_xalr3t.png",
  },
  {
    name: "Red Dead Online",
    path: "/rd2/homepage/red_dead_online_ul1prg.jpg",
    mask: "/rd2/homepage/red_dead_online_mask_lnkhda.png",
  },
  {
    name: "Weaponry",
    path: "/rd2/homepage/weaponry_obqafu.jpg",
    mask: "/rd2/homepage/weaponry_mask_ojnpbb.png",
  },
  {
    name: "Special & Ultimate Editions",
    path: "/rd2/homepage/special_ultimate_editions_h27cby.jpg",
    mask: "/rd2/homepage/special_ultimate_editions_mask_otiuer.png",
  },
  {
    name: "Gameplay Video Part 2",
    path: "/rd2/homepage/gameplay_video_2_i3hmug.jpg",
    mask: "/rd2/homepage/gameplay_video_2_mask_mskmsr.png",
  },
  {
    name: "The Van Der Linde Gang",
    path: "/rd2/homepage/van_der_linde_gang_kgbffn.jpg",
    mask: "/rd2/homepage/van_der_linde_gang_mask_wmosta.png",
  },
  {
    name: "Wildlife",
    path: "/rd2/homepage/wild_life_e5llmx.jpg",
    mask: "/rd2/homepage/wild_life_mask_bcejtv.png",
  },
  {
    name: "Soundtrack",
    path: "/rd2/homepage/soundtrack_hxpo6o.jpg",
    mask: "/rd2/homepage/soundtrack_mask_mexllv.png",
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
