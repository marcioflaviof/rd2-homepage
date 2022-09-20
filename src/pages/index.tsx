import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import styles from "@styles/Home.module.scss";
import { Header } from "src/components/molecules/Header/Header";
import { Footer } from "src/concepts/Homepage/Footer";
import { OutlawsForLife } from "src/concepts/Homepage/OutlawsForLife";
import { SectionCards } from "src/concepts/Homepage/SectionsCards";
import { Navbar } from "src/components/molecules/Navbar/Navbar";
import { useMediaQuery } from "src/hooks/useMediaQuery";

const Home: NextPage = () => {
  const [showNav, setShowNav] = useState(false);
  const [bannerImg, setBannerImg] = useState("");
  const [bannerHeight, setBannerHeight] = useState("");
  const desktop = useMediaQuery(768);

  useEffect(() => {
    setBannerImg(
      desktop ? "/homepage/main_banner.jpg" : "/mobile/homepage/main_banner.jpg"
    );
    setBannerHeight(desktop ? "42" : "138.53");
  }, [desktop]);

  return (
    <div>
      <Head>
        <title>RD2 Homepage</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Header setShowNavbar={setShowNav} />
        <Navbar setShowNavbar={setShowNav} show={showNav} />
        <div className={styles.bg_image_container}>
          <Image
            alt="banner image"
            src={bannerImg}
            layout="responsive"
            width="100"
            height={bannerHeight}
          />
        </div>

        <section className={styles.summary_container}>
          <p className={styles.summary}>
            America, 1899. The end of the Wild West era has begun. After a
            robbery goes badly wrong in the western town of Blackwater, Arthur
            Morgan and the Van der Linde gang are forced to flee. With federal
            agents and the best bounty hunters in the nation massing on their
            heels, the gang must rob, steal and fight their way across the
            rugged heartland of America in order to survive. As deepening
            internal divisions threaten to tear the gang apart, Arthur must make
            a choice between his own ideals and loyalty to the gang who raised
            him.
          </p>
        </section>
        <SectionCards />
        <OutlawsForLife />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
