import styles from "./styles/Button.module.scss";

type Props = {
  children?: React.ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export { Button };
