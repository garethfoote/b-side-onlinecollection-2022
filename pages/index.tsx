import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import HomePageItem from "../components/homepageitem";

import imgBelinda from "../public/content/belinda.jpg";
import imgIoannis from "../public/content/ioannis.png";
import imgDuncan from "../public/content/duncan.jpg";

const Home: NextPage = () => {
  const PageLink = ({ href, text }: { href: string; text: string }) => {
    return (
      <Link href={href}>
        <a>{text}</a>
      </Link>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>b-side: Online Collection</title>
        <meta
          name="description"
          content="An online programme of sound and image, part of b-side Festival 2022."
        />
      </Head>

      <header>
        <h1>
          B-Side: <em>Online Collection</em>
        </h1>
        <p>
          Want to see and hear some more or cant make it to the island? Our
          online programme of sound and image is available until 18th September.
          Featuring work by festival artists Duncan Whitley, Belinda Zhawi and
          Ioannis Panagiotou.
        </p>
      </header>
      <main className={styles.main}>
        <HomePageItem
          img={{ src: imgBelinda }}
          colour="orange"
          alignment="right"
          title="South x South East"
          description="Belinda Zhawis sound work South X South East explores migration and
          identities based on geography and features field recordings and
          contributions by harpist Marysia Osuchowsk and Caleb Azumah Nelson."
          pageLink={
            <PageLink
              href="south-x-south-east"
              text="Listen to South x South East"
            />
          }
        />
        <HomePageItem
          img={{ src: imgIoannis }}
          alignment="left"
          colour="cyan"
          title="South x South East"
          description="Belinda Zhawis sound work South X South East explores migration and
          identities based on geography and features field recordings and
          contributions by harpist Marysia Osuchowsk and Caleb Azumah Nelson."
          pageLink={
            <PageLink
              href="south-x-south-east"
              text="Listen to South x South East"
            />
          }
        />
        <HomePageItem
          img={{ src: imgDuncan }}
          alignment="right"
          colour="lime"
          title="South x South East"
          description="Belinda Zhawis sound work South X South East explores migration and
          identities based on geography and features field recordings and
          contributions by harpist Marysia Osuchowsk and Caleb Azumah Nelson."
          pageLink={
            <PageLink
              href="south-x-south-east"
              text="Listen to South x South East"
            />
          }
        />
      </main>
    </div>
  );
};

export default Home;
