"use client";

import { Header } from "@/stories/Header";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const ballRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (!ballRef.current) return;

    const ballSvg = ballRef.current;
    ballSvg.onpointermove = (event) => {
      if (event.buttons) {
        ballSvg.style.left = `${ballSvg.offsetLeft + event.movementX}px`;
        ballSvg.style.top = `${ballSvg.offsetTop + event.movementY}px`;
        ballSvg.style.position = "absolute";
        ballSvg.draggable = false;
        ballSvg.setPointerCapture(event.pointerId);
      }
    };
  }, []);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>ベストイレブン研究所 | Eleven Labo</h1>
        <img
          id="ballSvg"
          src="https://js.cx/clipart/ball.svg"
          alt="ball"
          width="40"
          height="40"
          ref={ballRef}
        />
      </main>
    </>
  );
}
