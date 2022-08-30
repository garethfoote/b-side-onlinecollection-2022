import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePageItem from "../components/homepageitem";
import Canvas from "../components/canvas";

import imgBelinda from "../public/content/belinda.jpg";
import imgIoannis from "../public/content/ioannis.png";
import imgDuncan from "../public/content/duncan.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Canvas />
      <div className={styles.container}>
        <Head>
          <title>b-side: Online Collection</title>
          <meta
            name="description"
            content="An online programme of sound and image, part of b-side Festival 2022."
          />
          <link
            rel="icon"
            href="https://b-side.org.uk/wp-content/uploads/2022/03/target-header.svg"
            type=""
            sizes="16x16"
          />
          <link
            rel="icon"
            href="https://b-side.org.uk/wp-content/uploads/2022/03/target-header.svg"
            type=""
            sizes="32x32"
          />
        </Head>

        <header>
          <h1>
            B-Side: <em>Online Collection</em>
          </h1>
          <p>
            Want to see and hear some more or can&apos;t make it to the island?
            Our online programme of sound and image is available until 18th
            September. Featuring work by festival artists Duncan Whitley,
            Belinda Zhawi and Ioannis Panagiotou.
          </p>
          <p className="deemphasised">
            b-side Festival's Online Collection has been made possible with
            support from the British Council's International Collaboration Grant
            programme.
          </p>
        </header>
        <main className={styles.main}>
          <HomePageItem
            href="south-x-south-east"
            img={{ src: imgBelinda }}
            altText="A photograph of the artist looking over her shoulder."
            colour="orange"
            alignment="right"
            title="South x South East"
            description="Belinda Zhawi's sound work South X South East explores migration and identities based on geography and features field recordings and contributions by harpist Marysia Osuchowsk and Caleb Azumah Nelson. "
            linkText="Listen to South x South East"
          />
          <HomePageItem
            href="kimberlin"
            img={{ src: imgDuncan }}
            altText="A mossy covered wall. Still image from project."
            alignment="left"
            colour="cyan"
            title="Kimberlin"
            description="Kimberlin is a short film, first completed in 2019, with a 2022 cut to be premiered at this year's festival. The film is about the discovery of an underground cinema cavern on the Isle of Portland: the uncanny discovery and subsequent breaking news begin to generate speculation amongst islanders as to who created the cavern and the canisters of film found within it. Kimberlin features a specially commissioned soundtrack by acclaimed electronic musician Abul Mogard."
            linkText="Watch Kimberlin"
          />
          <HomePageItem
            href="umwelt-and-the-memory-passage"
            img={{ src: imgIoannis }}
            altText="A man holding a box with a head for a tree."
            alignment="right"
            colour="lime"
            title="Umwelt and The Memory Passage"
            description="Ioannis Panagiotou presents 2 films, Umwelt and The Memory Passage, featuring Plus Minus Ensemble, Red Note Ensemble and the Edinburgh Film Music Orchestra. Pilgrim's Horses, part 3 of this trilogy, has been commissioned for b-side and can be seen at Sweet Hill Farm."
            linkText="Watch Umwelt and The Memory Passage"
          />
        </main>
        <footer className={styles.fullProgramme}>
          <a href="https://b-side.org.uk/project/festival-2022/">
            <div>
              <span>
                Full
                <br /> festival
                <br /> programme
              </span>
            </div>
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
