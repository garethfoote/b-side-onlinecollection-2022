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
            <div className={styles.projectContainer}>
              <p>
                Kimberlin is a short film, first completed in 2019, with a 2022
                cut to be premiered at this year&apos;s festival. The film is
                about the discovery of an underground cinema cavern on the Isle
                of Portland: the uncanny discovery and subsequent breaking news
                begin to generate speculation amongst islanders as to who
                created the cavern and the canisters of film found within it.
                Kimberlin features a specially commissioned soundtrack by
                acclaimed electronic musician Abul Mogard.
              </p>
              <p>
                It appears we are under siege! On Portland the sea encroaches,
                landslips erode the island&apos;s cliffs, slowly but surely.
                Inland, the quarries that scar the landscape eventually grow
                over, interring dialect and song. The super-8mm films found
                inside the cinema cavern also bear scars - scratches and burns
                in the emulsion surface, in which are recorded images of
                Portland&apos;s landscape and fauna. Field recordings of fog
                horns and the trilling of songbirds pass through the filters of
                Abul Mogard&apos;s synthesiser, emerging as faint memories of
                place: echoes of the digital future of an England now difficult
                to grasp. Where &quot;quarry bells no longer ring, except in old
                men&apos;s dreams&quot;.
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

export default Kimberlin;
