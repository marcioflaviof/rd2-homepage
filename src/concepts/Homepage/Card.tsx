import Image from "next/image";
import styles from "./styles/Card.module.scss";

type CardType = {
  name: string;
  mask: string;
  image: string;
};

const Card: React.FC<CardType> = ({ name, mask, image }) => {
  return (
    <a className={styles.container}>
      <div className={styles.image_container}>
        <div className={styles.mask}>
          <Image
            alt="mask"
            layout="responsive"
            width="100"
            height="100"
            src={mask}
          />
        </div>
        <Image
          alt="section image"
          className={styles.image}
          src={image}
          layout="responsive"
          width="100"
          height="100"
        />
      </div>
      <span className={styles.title}>{name}</span>
    </a>
  );
};

export { Card };
