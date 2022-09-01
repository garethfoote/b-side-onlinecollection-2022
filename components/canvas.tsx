import styles from "../styles/Canvas.module.css";
import { useEffect, useState, useRef, createRef } from "react";
import throttle from "lodash/throttle";

const getCircleDPath = (ctx: CanvasRenderingContext2D) => {
  const p1 = new Path2D(
    "M500 700.88c-110.76 0-200.87-90.12-200.87-200.88S389.24 299.12 500 299.12 700.88 389.24 700.88 500 610.76 700.88 500 700.88m0-481.29c-154.62 0-280.41 125.79-280.41 280.41S345.38 780.41 500 780.41 780.41 654.62 780.41 500 654.62 219.59 500 219.59"
  );
  ctx.fillStyle = "#29b8ce";
  ctx.fill(p1);

  const p2 = new Path2D(
    "M500 848.89c-192.38 0-348.89-156.51-348.89-348.89S307.62 151.11 500 151.11 848.89 307.62 848.89 500 692.38 848.89 500 848.89m0-780.41C262.06 68.48 68.48 262.06 68.48 500S262.06 931.52 500 931.52 931.52 737.94 931.52 500 737.94 68.48 500 68.48"
  );
  ctx.fillStyle = "#fff";
  ctx.fill(p2);

  const p3 = new Path2D(
    "M500 931.52C262.06 931.52 68.48 737.94 68.48 500S262.06 68.48 500 68.48 931.52 262.06 931.52 500 737.94 931.52 500 931.52m353.55-785.07C759.12 52 633.56 0 500 0S240.89 52 146.45 146.45 0 366.45 0 500s52 259.12 146.45 353.55S366.45 1000 500 1000s259.12-52 353.55-146.45S1000 633.55 1000 500s-52-259.12-146.45-353.55"
  );
  ctx.fillStyle = "#1d1d1b";
  ctx.fill(p3);

  const p4 = new Path2D(
    "M500 780.41c-154.62 0-280.41-125.79-280.41-280.41S345.38 219.59 500 219.59 780.41 345.38 780.41 500 654.62 780.41 500 780.41m0-629.3c-192.38 0-348.89 156.51-348.89 348.89S307.62 848.89 500 848.89 848.89 692.38 848.89 500 692.38 151.11 500 151.11"
  );
  ctx.fillStyle = "#6d746c";
  ctx.fill(p4);

  const p5 = new Path2D(
    "M500 299.12c-110.76 0-200.87 90.12-200.87 200.88S389.24 700.88 500 700.88 700.88 610.76 700.88 500 610.76 299.12 500 299.12"
  );
  ctx.fillStyle = "#4a4a49";
  ctx.fill(p5);

  return ctx;
};

const Canvas = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function draw(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    const mediaQuery0 = window.matchMedia("(min-width: 321px)");
    const mediaQuery1 = window.matchMedia("(min-width: 481px)");
    const mediaQuery2 = window.matchMedia("(min-width: 768px)");
    // const mediaQuery3 = window.matchMedia("min-width: 1023px");

    // Small, y=middle, x=variable
    ctx.save();

    if (mediaQuery1.matches == false) ctx.translate(10, 642);
    else if (mediaQuery1.matches == true) ctx.translate(width - 50, 642);
    else if (mediaQuery2.matches == true) ctx.translate(width, 642);
    ctx.scale(0.075, 0.075);
    ctx = getCircleDPath(ctx);
    ctx.restore();

    // Medium, y=top/halfhidden, x=0.675*width
    ctx.save();
    ctx.translate(width * 0.675, -60);
    ctx.scale(0.1, 0.1);
    ctx = getCircleDPath(ctx);
    ctx.restore();

    // // Large, y=towards bottom, x= left
    ctx.save();
    if (mediaQuery2.matches === true)
      ctx.translate(0.05 * width, canvas.height - 275);
    else if (mediaQuery1.matches === true)
      ctx.translate(0.05 * width, canvas.height * 0.63);
    else if (mediaQuery0.matches === true) ctx.translate(width - 100, 1200);
    else ctx.translate(0.05 * width, 1150);
    ctx.scale(0.1, 0.1);
    ctx = getCircleDPath(ctx);
    ctx.restore();
  }

  useEffect(() => {
    let c = canvasRef.current as HTMLCanvasElement;
    let ctx = c?.getContext("2d") as CanvasRenderingContext2D;

    const resize = throttle(() => {
      const width =
        document.body.clientWidth +
        (window.innerWidth - document.documentElement.clientWidth);
      const height = document.body.clientHeight;
      const pixelRatio = window.devicePixelRatio || 1;

      if (c) {
        c.width = width * pixelRatio;
        c.height = height * pixelRatio;

        c.style.width = `${width}px`;
        c.style.height = `${height}px`;
      }

      ctx.imageSmoothingEnabled = false;
      ctx.scale(pixelRatio, pixelRatio);

      ctx.clearRect(0, 0, c.width, c.height);
      ctx.fill();
      ctx.rect(0, 0, c.width, c.height);
      draw(c, ctx, width, height);
    }, 1000);

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      id="myCanvas"
      width="100%"
      height="100%"
    >
      Your browser does not support the HTML canvas tag.
    </canvas>
  );
};

export default Canvas;
