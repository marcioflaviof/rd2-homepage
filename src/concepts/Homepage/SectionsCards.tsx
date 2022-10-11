import { Card } from "./Card";
import styles from "./styles/SectionCards.module.scss";

const sections = [
  {
    name: "Pc Release",
    path: "/rd2/homepage/pc_release_byd8i7",
    mask: "/rd2/homepage/pc_release_mask_rssvfs",
    link: "https://www.rockstargames.com/reddeadredemption2/pc",
  },
  {
    name: "Reviews",
    path: "/rd2/homepage/reviews_mg6a8p",
    mask: "/rd2/homepage/reviews_mask_xalr3t",
    link: "https://www.rockstargames.com/reddeadredemption2/news/article/60660/Red-Dead-Redemption-2-Reviews",
  },
  {
    name: "Red Dead Online",
    path: "/rd2/homepage/red_dead_online_ul1prg",
    mask: "/rd2/homepage/red_dead_online_mask_lnkhda",
    link: "https://www.rockstargames.com/reddeadredemption2/online",
  },
  {
    name: "Weaponry",
    path: "/rd2/homepage/weaponry_obqafu",
    mask: "/rd2/homepage/weaponry_mask_ojnpbb",
    link: "https://www.rockstargames.com/reddeadredemption2/features/weaponry",
  },
  {
    name: "Special & Ultimate Editions",
    path: "/rd2/homepage/special_ultimate_editions_h27cby",
    mask: "/rd2/homepage/special_ultimate_editions_mask_otiuer",
    link: "https://www.rockstargames.com/reddeadredemption2/order",
  },
  {
    name: "Gameplay Video Part 2",
    path: "/rd2/homepage/gameplay_video_2_i3hmug",
    mask: "/rd2/homepage/gameplay_video_2_mask_mskmsr",
    link: "https://www.rockstargames.com/reddeadredemption2/videos?id=12103",
  },
  {
    name: "The Van Der Linde Gang",
    path: "/rd2/homepage/van_der_linde_gang_kgbffn",
    mask: "/rd2/homepage/van_der_linde_gang_mask_wmosta",
    link: "https://www.rockstargames.com/reddeadredemption2/features/vanderlindegang",
  },
  {
    name: "Wildlife",
    path: "/rd2/homepage/wild_life_e5llmx",
    mask: "/rd2/homepage/wild_life_mask_bcejtv",
    link: "https://www.rockstargames.com/reddeadredemption2/features/wildlife",
  },
  {
    name: "Soundtrack",
    path: "/rd2/homepage/soundtrack_hxpo6o",
    mask: "/rd2/homepage/soundtrack_mask_mexllv",
    link: "https://www.rockstargames.com/reddeadredemption2/features/music",
  },
];

const SectionCards = () => {
  return (
    <section className={styles.container}>
      {sections.map(({ name, path, mask, link }) => (
        <Card name={name} key={name} mask={mask} image={path} link={link} />
      ))}
    </section>
  );
};

export { SectionCards };
