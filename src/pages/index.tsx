import type { NextPage } from "next";
import Head from "next/head";

import styles from "@styles/Home.module.scss";
import { Navbar } from "src/components/molecules/Navbar/Navbar";
import { Footer } from "src/concepts/Homepage/Footer";
import { OutlawsForLife } from "src/concepts/Homepage/OutlawsForLife";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>RD2 Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className={styles.background_image} />
        <div className={styles.summary_section}>
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
        </div>
        {/* <SectionCards /> */}
        <OutlawsForLife />
        <Footer />
      </main>
    </div>
  );
};

export default Home;