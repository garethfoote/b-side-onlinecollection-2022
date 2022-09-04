import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/ArtistPage.module.css";
import ImageCircle from "../components/imagecircle";
import cx from "classnames";
import { Colour } from "../types";
import img from "../public/content/sound-of-nairobi.jpg";

const colour: Colour = "orange";

const SouthXSouthEast: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sound of Nairobi | b-side: Online Collection</title>
        <meta
          name="description"
          content="SOUND OF NAIROBI (SON) is an open-access archive of the sounds of Nairobi. It employs sound as a material that can be archived, researched and explored as a source of information that can narrate the story of the city, now and in the future."
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
                altText="Image of a street in Nairobi."
                colour={colour}
              />
            </div>
            <h1>Sound of Nairobi (SON)</h1>
            <h2>
              Creatives Garage, Masaii Mbili, Brian Muhia, Kamwangi Njue, Sophia
              Bauer and Raphael Kariuki
            </h2>
          </div>
          <div className={styles.viewer}>
            <div>
              <a
                className="button"
                href="https://archive.soundofnairobi.net/son/maps"
              >
                Visit Sound of Nairobi
                <br />
              </a>
              <div className="button-msg">
                Opens external link
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32.822 32.822"
                  >
                    <g data-name="Lager 80" transform="translate(0 .822)">
                      <path
                        data-name="Path 89"
                        d="M24 22v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5a2 2 0 0 0 2-2 2 2 0 0 0-2-2H3a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2Z"
                      />
                      <rect
                        data-name="Rectangle 40"
                        width="16"
                        height="4"
                        rx="2"
                        transform="translate(16)"
                      />
                      <rect
                        data-name="Rectangle 41"
                        width="16"
                        height="4"
                        rx="2"
                        transform="rotate(90 16 16)"
                      />
                      <g data-name="Group 37">
                        <rect
                          data-name="Rectangle 42"
                          width="32.296"
                          height="3.971"
                          rx="1.986"
                          transform="rotate(-45 30.162 2.342)"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.projectDescription}>
            <div className={styles.projectContainer}>
              <p>
                For b-side Festival 2022, we have been connecting with two
                artist collectives based in Nairobi, Kenya.
              </p>
              <p>
                <a href="https://www.creativesgarage.org/">Creatives Garage</a>{" "}
                a creative studio, film and media house; and{" "}
                <a href="https://www.instagram.com/maasai_mbili">
                  Masaii Mbili
                </a>{" "}
                an artist and activist collective based in Kibera, a large
                informal settlement in Nairobi&apos;s city centre.
              </p>
              <p>
                Creatives Garage, led by Liz Kilili, have co-designed our queer
                led and digitally experimental programme,{" "}
                <a href="htts://thatOther.place">That Other Place</a>. This
                year, Creatives Garage and b-side have co-commissioned artist
                and writer Babar Suleman to create a major new{" "}
                <a href="https://b-side.org.uk/events/requital-the-lighthouse-as-the-siren/">
                  augmented reality artwork
                </a>{" "}
                at the Isle of Portland&apos;s Portland Bill Lighthouse.
              </p>
              <p>
                Visiting Portland from Masaii Mbili this year is artist Kevo
                Stero. An artist and sign writer, Kevo has been in residence at
                b-side throughout August undertaking the project,{" "}
                <a href="https://b-side.org.uk/artist/kevo-stero-and-maasai-mbili/">
                  Everyday Portland
                </a>
                . A citizen journalist project, Kevo has been excavating stories
                of Portland islanders, working with residents to turn their
                stories into giant banners which will be paraded at this
                year&apos;s Portland Parade.
              </p>
              <p>
                As part of our Online Collection we want to share with you SOUND
                OF NAIROBI (SON) as a way to celebrate the places and people of
                Nairobi and to offer these sounds for your interest, inspiration
                and potential future collaborations.
              </p>
              <p>
                SOUND OF NAIROBI (SON) is an open-access archive of the sounds
                of Nairobi. It employs sound as a material that can be archived,
                researched and explored as a source of information that can
                narrate the story of the city, now and in the future. It is
                intended as a resource for artists, researchers,
                recordists&hellip;anyone interested in sound.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SouthXSouthEast;
