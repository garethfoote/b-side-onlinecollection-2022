import Link from "next/link";
import Image, { ImageProps } from "next/image";
import styles from "../styles/HomePageItem.module.css";
import ImageCircle from "./imagecircle";
import cx from "classnames";

type Colours = "orange" | "cyan" | "pink" | "lime";
type Align = "left" | "right";
type Props = {
  href: string;
  img: ImageProps;
  title: string | JSX.Element;
  altText: string;
  description: string;
  linkText: string;
  colour: Colours;
  alignment?: Align;
};

const HomePageItem = ({
  href,
  alignment = "left",
  altText,
  img,
  title,
  description,
  linkText,
  colour,
}: Props) => {
  return (
    <article className={cx(styles[colour], styles.article, styles[alignment])}>
      <div className={styles.imageContainer}>
        <ImageCircle href={href} img={img} altText={altText} colour={colour} />
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
        <Link href={href}>
          <a>{linkText}</a>
        </Link>
      </div>
    </article>
  );
};

export default HomePageItem;
