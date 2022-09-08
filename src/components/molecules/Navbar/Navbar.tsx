import { Button } from "src/components/atoms/Button/Button";
import styles from "./styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu_container}>
        <div className={styles.hamburguer_menu}>
          <img src="icons/hamburguer.svg" width="16px" height="16px" />
        </div>
        <span className={styles.title}>Red Dead Redemption 2</span>
      </div>
      <Button>Buy now</Button>
    </nav>
  );
};

export { Navbar };
