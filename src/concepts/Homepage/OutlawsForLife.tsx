import styles from "./styles/OutlawsForLife.module.scss";

const OutlawsForLife = () => {
  return (
    <section className={styles.container}>
      <div className={styles.outlaws_top} />
      <span className={styles.outlaws_for_life}>Outlaws for Life</span>
    </section>
  );
};

export { OutlawsForLife };
