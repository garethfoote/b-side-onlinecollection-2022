import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
        <div className={styles.close}>
          <Link href="/">
            <a>
              <svg
                width="45"
                height="45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M43.18 1.82a3.083 3.083 0 0 1 0 4.36l-37 37a3.083 3.083 0 0 1-4.36-4.36l37-37a3.083 3.083 0 0 1 4.36 0Z"
                  fill="#000"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.82 1.82a3.083 3.083 0 0 1 4.36 0l37 37a3.083 3.083 0 1 1-4.36 4.36l-37-37a3.083 3.083 0 0 1 0-4.36Z"
                  fill="#000"
                />
              </svg>
            </a>
          </Link>
        </div>
        <div className={styles.viewer}>
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
          <div className={styles.imageContainer}>
            <ImageCircle
              img={imgBelinda}
              altText="A photograph of the artist looking over her shoulder."
              colour={colour}
            />
          </div>
          <div className={styles.details}>
            <h1>South x South East</h1>
            <h2>Belinda Zhawis</h2>
            <p>
              Belinda Zhawis sound work South X South East explores migration
              and identities based on geography and features field recordings
              and contributions by harpist Marysia Osuchowsk and Caleb Azumah
              Nelson.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SouthXSouthEast;
