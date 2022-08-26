import Link from "next/link";
import Image, { ImageProps } from "next/image";
import styles from "../styles/HomePageItem.module.css";
import cx from "classnames";

type Colours = "orange" | "cyan" | "pink" | "lime";
type Align = "left" | "right";
type Props = {
  href: string;
  img: ImageProps;
  title: string;
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
      <div className={styles.image}>
        <Link href={href}>
          <a>
            <figure>
              <Image
                layout="fill"
                objectFit="cover"
                src={img.src}
                alt={altText}
              />
            </figure>
          </a>
        </Link>
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
