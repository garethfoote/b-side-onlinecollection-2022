import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/ArtistPage.module.css";
import ImageCircle from "../components/imagecircle";
import cx from "classnames";
import { Colour } from "../types";
import img from "../public/content/ioannis.png";

const colour: Colour = "lime";

const UmweltAndMemoryPassage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Umwelt and The Memory Passage | b-side: Online Collection</title>
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
                altText="A man holding a box with a head for a tree."
                colour={colour}
              />
            </div>
            <h1>
              Umwelt{" "}
              <span className="deemphasised" style={{ textTransform: "none" }}>
                and
              </span>{" "}
              The Memory Passage
            </h1>
            <h2>Ioannis Panagiotou</h2>
          </div>
          <div className={cx(styles.viewer, styles.youtube)}>
            <div className={styles.videoEmbed}>
              <iframe
                src="https://www.youtube.com/embed/xNJLYaGGA3s"
                title="Umwelt"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.videoEmbed}>
              <iframe
                src="https://www.youtube.com/embed/4A1O52gOvRs"
                title="The Memory Passage"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={styles.projectDescription}>
            <div className={styles.projectContainer}>
              <h1>Umwelt</h1>
              <h2>Ioannis Panagiotou</h2>
              <p>
                &ldquo;Umwelt&rdquo; rebuilds, with the use of ephemeral media:
                memories of my great-grandfather, experiences from a lost war, a
                destroyed villa in the woods, and a lost notebook. What is the
                relationship between my family&apos;s lost memories and my
                Umwelt?
              </p>
              <p className="deemphasised">
                concept, performance, composition: Ioannis Panagiotou
                <br />
                video: Alia-Lauren Clain
                <br />
                music performance: Plus-Minus Ensemble (London)
                <br />
                description: video performance, sound, military boxes, pine
                trees, water, sand
              </p>
            </div>
            <div className={styles.projectContainer}>
              <h1>The Memory Passage</h1>
              <h2>Ioannis Panagiotou and Dorothea Kalogianni</h2>
              <p>
                During the Greek Genocide in 1922, a member of the family,
                Manolis, was murdered in a mill as he was trying to escape to
                Greece. &quot;The Memory Passage&quot; entails a recorded
                performance that portrays the imaginary narration of the above
                story. Is it possible to have an anamnesis of an event in which
                you never took part?
              </p>
              <p className="deemphasised">
                concept: Ioannis Panagiotou and Dorothea Kalogianni
                <br />
                performance, composition: Ioannis Panagiotou
                <br />
                music performance: Edinburgh Film Music Orchestra,
                <br />
                description: video performance, sound, concrete, water, light,
                smoke
              </p>
              <p className="deemphasised">
                Dorothea Kalogianni is a UK-based architect from Greece with an
                interest in the affective and liminal experience of digitally
                mediated spaces. She is a PhD candidate in Architecture at The
                University of Edinburgh, where she has also been a tutor.
                Dorothea collaborates with sound and visual artists on the
                creation of interactive audiovisual exploratory setups.
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
                migration. Belinda&apos;s commission has been developed in
                partnership with{" "}
                <a href="www.counterpointsarts.org.uk">Counterpoints Arts</a>.
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
                joined by Lithuanian guitarist Danguole Lingyte.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UmweltAndMemoryPassage;
