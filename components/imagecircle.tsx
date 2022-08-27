import React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import cx from "classnames";
import styles from "../styles/ImageCircle.module.css";
import { Colour } from "../types";

type Props = {
  href?: string;
  img: ImageProps;
  altText: string;
  colour: Colour;
};

type WrapProps = {
  condition: boolean;
  wrapper: (children: React.ReactNode) => JSX.Element;
  children?: React.ReactNode;
};

const Wrap = ({ condition, wrapper, children }: WrapProps): JSX.Element => {
  return condition ? wrapper(children) : <>{children}</>;
};

const ImageCircle = ({ href = "", altText, img, colour }: Props) => {
  return (
    <div className={cx(styles[colour], styles.image)}>
      <Wrap
        condition={!!href}
        wrapper={(children) => (
          <Link href={href}>
            <a>{children}</a>
          </Link>
        )}
      >
        <figure>
          <Image layout="fill" objectFit="cover" src={img.src} alt={altText} />
        </figure>
      </Wrap>
    </div>
  );
};

export default ImageCircle;
