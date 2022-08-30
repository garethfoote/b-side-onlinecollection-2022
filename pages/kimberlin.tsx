import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/ArtistPage.module.css";
import ImageCircle from "../components/imagecircle";
import cx from "classnames";
import { Colour } from "../types";
import img from "../public/content/duncan.jpg";

const colour: Colour = "cyan";

const Kimberlin: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kimberlin | b-side: Online Collection</title>
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M43.18 1.82a3.083 3.083 0 0 1 0 4.36l-37 37a3.083 3.083 0 0 1-4.36-4.36l37-37a3.083 3.083 0 0 1 4.36 0Z"
                  fill="#000"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.82 1.82a3.083 3.083 0 0 1 4.36 0l37 37a3.083 3.083 0 1 1-4.36 4.36l-37-37a3.083 3.083 0 0 1 0-4.36Z"
                  fill="#000"
                />
              </svg>
            </a>
          </Link>
        </div>

        <div className={cx(styles[colour], styles.infoPanel)}>
          <div className={styles.projectHeader}>
            <div className={styles.imageContainer}>
              <ImageCircle
                img={img}
                altText="A mossy covered wall. Still image from project."
                colour={colour}
              />
            </div>
            <h1>Kimberlin</h1>
            <h2>Duncan Whitley</h2>
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
          <div className={styles.projectDescription}>
            <p>
              Kimberlin is a short film, first completed in 2019, with a 2022
              cut to be premiered at this year’s festival. The film is about the
              discovery of an underground cinema cavern on the Isle of Portland:
              the uncanny discovery and subsequent breaking news begin to
              generate speculation amongst islanders as to who created the
              cavern and the canisters of film found within it. Kimberlin
              features a specially commissioned soundtrack by acclaimed
              electronic musician Abul Mogard.
            </p>
            <p>
              It appears we are under siege! On Portland the sea encroaches,
              landslips erode the island’s cliffs, slowly but surely. Inland,
              the quarries that scar the landscape eventually grow over,
              interring dialect and song. The super-8mm films found inside the
              cinema cavern also bear scars – scratches and burns in the
              emulsion surface, in which are recorded images of Portland’s
              landscape and fauna. Field recordings of fog horns and the
              trilling of songbirds pass through the filters of Abul Mogard's
              synthesiser, emerging as faint memories of place: echoes of the
              digital future of an England now difficult to grasp. Where “quarry
              bells no longer ring, except in old men’s dreams”.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Kimberlin;
