import Image from "next/image";

import styles from "./styles/LoadingPage.module.scss";

type LoadingPageProps = {
  show: boolean;
};

const LoadingPage = ({ show }: LoadingPageProps) => {
  return (
    <div className={`${styles.container} ${show ? "" : styles.slide_up}`}>
      <Image
        src="/rd2/homepage/loading_image_f17pnb.jpg"
        alt="loading image"
        layout="fill"
      />

      <Image
        src="/rd2/homepage/loading_icon_jrtkgj.gif"
        alt="loading gif"
        width={200}
        height={200}
      />
    </div>
  );
};

export { LoadingPage };
