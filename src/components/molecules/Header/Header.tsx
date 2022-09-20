import { Dispatch, SetStateAction } from "react";
import { Button } from "src/components/atoms/Button/Button";
import styles from "./styles/Header.module.scss";

type HeaderProps = {
  setShowNavbar: Dispatch<SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ setShowNavbar }) => {
  return (
    <header className={styles.header}>
      <button
        className={styles.hamburguer_menu}
        onClick={() => setShowNavbar((show) => !show)}
      >
        <picture>
          <img
            alt="hamburguer menu"
            src="icons/hamburguer.svg"
            width="16px"
            height="16px"
          />
        </picture>
        <p className={styles.title}>Red Dead Redemption 2</p>
      </button>

      <Button>Buy now</Button>
    </header>
  );
};

export { Header };
