import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/ArtistPage.module.css";
import ImageCircle from "../components/imagecircle";
import cx from "classnames";
import { Colour } from "../types";
import imgBelinda from "../public/content/belinda.jpg";

const colour: Colour = "orange";

const SouthXSouthEast: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>South x South East | b-side: Online Collection</title>
        <meta name="description" content="???????????" />
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

      <main className={styles.main}>
        <div className="viewer">
          <iframe
            style={{ border: 0, width: 350, height: 442 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=3422374590/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          >
            <a href="https://mamoyo.bandcamp.com/track/south-x-south-east-sxse">
              SOUTH X SOUTH EAST (SXSE) by MA.MOYO
            </a>
          </iframe>
        </div>
        <div className={cx(styles[colour], styles.infoPanel)}>
          <ImageCircle
            img={imgBelinda}
            altText="A photograph of the artist looking over her shoulder."
            colour={colour}
          />
          <div className={styles.details}>
            <h1>South x South East</h1>
            <h2>Belinda Zhawis</h2>
            <p>
              Belinda Zhawis sound work South X South East explores migration
              and identities based on geography and features field recordings
              and contributions by harpist Marysia Osuchowsk and Caleb Azumah
              Nelson." linkText="Listen to South x South East
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SouthXSouthEast;
