import Image, { ImageProps } from "next/image";
import styles from "../styles/HomePageItem.module.css";
import cx from "classnames";

type Colours = "orange" | "cyan" | "pink" | "lime";
type Align = "left" | "right";
type Props = {
  img: ImageProps;
  title: String;
  description: String;
  pageLink: JSX.Element;
  colour: Colours;
  alignment?: Align;
};

const HomePageItem = ({
  alignment = "left",
  img,
  title,
  description,
  pageLink,
  colour,
}: Props) => {
  return (
    <article className={cx(styles[colour], styles.article, styles[alignment])}>
      <div className={styles.image}>
        <figure>
          <Image
            layout="fill"
            objectFit="cover"
            src={img.src}
            alt="Picture of the author"
          />
        </figure>
      </div>
      <div className={styles.details}>
        <div
          className={cx({
            [styles.leftShape]: alignment === "left",
            [styles.rightShape]: alignment === "right",
          })}
        ></div>
        <h1>{title}</h1>
        <p>{description}</p>
        {pageLink}
      </div>
    </article>
  );
};

export default HomePageItem;
