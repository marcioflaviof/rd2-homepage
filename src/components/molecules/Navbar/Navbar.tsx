import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import styles from "./styles/Navbar.module.scss";

const navOptions = [
  { option: "home", selected: true },
  { option: "info" },
  { option: "pc release" },
  { option: "videos" },
  { option: "screens" },
  {
    option: "features",
    subOptions: [
      "the van der linde gang",
      "the frontier, cities & towns",
      "wildlife",
      "weaponry",
      "music",
      "social club",
    ],
  },
  { option: "news" },
  { option: "online" },
  { option: "downloads" },
  { option: "buy now" },
];

type NavProps = {
  show: boolean;
  setShowNavbar: Dispatch<SetStateAction<boolean>>;
};

const Navbar: React.FC<NavProps> = ({ show, setShowNavbar }) => {
  if (!show) return <></>;

  return (
    <>
      <div
        className={styles.overlay}
        onClick={() => setShowNavbar((s) => !s)}
      />
      <nav className={styles.container}>
        <div className={styles.background_img} />
        <div className={styles.bullets_container}>
          {navOptions.map((no) => {
            const justRender = no.subOptions ? (
              <div>
                <span className={styles.bullet_with_sub}>{no.option}</span>
                {no.subOptions.map((so) => (
                  <div className={styles.so_container} key={so}>
                    <a className={styles.bullets}>
                      <div className={styles.svg_container}>
                        <picture>
                          <img
                            alt="nav selected style"
                            src="/homepage/selected_nav_page.svg"
                          />
                        </picture>
                      </div>
                      {so}
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <a
                className={`${styles.bullets} ${
                  no.selected && styles.selected
                }`}
              >
                <div className={styles.svg_container}>
                  <picture>
                    <img
                      alt="nav selected style"
                      src="/homepage/selected_nav_page.svg"
                    />
                  </picture>
                </div>
                {no.option}
              </a>
            );

            return justRender;
          })}

          <div className={styles.divider}>
            <Image
              src="/homepage/divider.png"
              alt="divider"
              layout="responsive"
              height={1.5}
              width={100}
            />
          </div>

          <div className={styles.terms}>
            <a>privacy</a>
            <a>legal</a>
            <a>support</a>
            <a>english</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
