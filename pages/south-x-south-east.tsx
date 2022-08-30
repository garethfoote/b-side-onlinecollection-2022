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
                img={imgBelinda}
                altText="A photograph of the artist looking over her shoulder."
                colour={colour}
              />
            </div>
            <h1>South x South East</h1>
            <h2>Belinda Zhawi</h2>
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
            <div className={styles.projectContainer}>
              <p>
                South X South East explores migration and identities based on
                geography and features field recordings and contributions by
                harpist Marysia Osuchowsk and Caleb Azumah Nelson. Belinda Zhawi
                is a Zimbabwean literary &amp; sound artist based in London,
                author of Small Inheritances (ignitionpress, 2018), &amp;
                experiments with sound/text performance as MA.MOYO. Her work has
                been featured on various platforms including The White Review,
                NTS, Boiler Room &amp; BBC Radio. She&apos;s held residencies
                with Triangle Asterides, Serpentine Galleries and ICA London.
                Belinda&apos;s the co-founder of literary arts platform,
                BORN::FREE.
              </p>
            </div>
            <div className={styles.projectContainer}>
              <h3>This work is part of</h3>
              <h1>
                <span className="deemphasised">Common Lands:</span> Who do we
                think we are?
              </h1>
              <p>
                Over the years, b-side artists from both on and off the island
                have created artworks that celebrate, question and provoke
                thoughts on place, identity and belonging. Lots of us have taken
                part by sharing our special places here on the island and
                sometimes we&apos;ve lamented those places we can no longer
                live.
              </p>
              <p>
                This year, and going forward, we want to widen the lens and
                extend the conversation further. We want to go deeper in our
                exploration of belonging, displacement and thoughts on migration
                - historical and contemporary, and both on and off the island,
                by inviting new voices to add richness, inspiration and
                challenge to the conversation. We are delighted that two
                artists, <b>Belinda Zhawi</b> and <b>Ioannis Panagiotou</b>,
                will be sharing with you their responses to the theme{" "}
                <em>Who Do We Think We Are?</em>
              </p>
              <p>
                Belinda&apos;s sound and poetry installation,{" "}
                <a href="https://b-side.org.uk/events/viva-voce/">Viva Voce</a>,
                will trace the movement of tides, people, animals and goods.
                Using the Rivers Thames and Exe as a starting point,
                Belinda&apos;s work will blend reflections on two great rivers
                bound together by a shared history of trade, movement and
                migration.
              </p>
              <p>
                Ioannis&apos; multi-media installation and live music
                performance,{" "}
                <a href="https://b-side.org.uk/events/pilgrims-horses/">
                  Pilgrim&apos;s Horses
                </a>
                , marks the one hundred year anniversary of the Asia Minor
                Catastrophe. Using Portland bridleways to imagine and trace the
                journey on horseback by one of his relatives, the work seeks to
                discover lost memories and stories of diaspora. Ioannis will be
                joined by Lithuanian guitarist Danguole Lingyte.{" "}
                <em>Who Do We Think We Are?</em> is being developed in
                partnership with{" "}
                <a href="www.counterpointsarts.org.uk">Counterpoints Arts</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SouthXSouthEast;
