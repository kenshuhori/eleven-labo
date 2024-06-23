"use client";

import { Header } from "@/stories/Header";
import { PlayerIcon } from "@/stories/PlayerIcon";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const player001Ref = useRef<HTMLDivElement>(null);
  const player002Ref = useRef<HTMLDivElement>(null);
  const player003Ref = useRef<HTMLDivElement>(null);
  const player004Ref = useRef<HTMLDivElement>(null);
  const player005Ref = useRef<HTMLDivElement>(null);
  const player006Ref = useRef<HTMLDivElement>(null);
  const player007Ref = useRef<HTMLDivElement>(null);
  const player008Ref = useRef<HTMLDivElement>(null);
  const player009Ref = useRef<HTMLDivElement>(null);
  const player010Ref = useRef<HTMLDivElement>(null);
  const player011Ref = useRef<HTMLDivElement>(null);

  [
    player001Ref,
    player002Ref,
    player003Ref,
    player004Ref,
    player005Ref,
    player006Ref,
    player007Ref,
    player008Ref,
    player009Ref,
    player010Ref,
    player011Ref,
  ].forEach((playerRef, index) => {
    useEffect(() => {
      if (!playerRef.current) return;

      const ballSvg = playerRef.current;
      ballSvg.onpointermove = (event) => {
        if (event.buttons) {
          const horizon = ballSvg.offsetLeft + event.movementX;
          if (horizon < 50 || horizon > window.innerWidth - 100) return;
          ballSvg.style.left = `${pxToRem(ballSvg.offsetLeft + event.movementX)}rem`;
          ballSvg.style.top = `${pxToRem(ballSvg.offsetTop + event.movementY)}rem`;
          ballSvg.style.position = "absolute";
          ballSvg.draggable = false;
          ballSvg.setPointerCapture(event.pointerId);
        }
      };
    }, [playerRef]);
  });

  const pxToRem = (px: number) => {
    const coefficient = window.innerWidth / 360;
    return px / 10 / coefficient;
  };

  return (
    <>
      <Header />
      <main>
        <div className={styles.footballField}>
          <div>
            <PlayerIcon className={styles.lw} ref={player011Ref} />
            <PlayerIcon className={styles.cf} ref={player009Ref} />
            <PlayerIcon className={styles.rw} ref={player007Ref} />
          </div>
          <div>
            <PlayerIcon className={styles.lih} ref={player010Ref} />
            <PlayerIcon className={styles.cmf} ref={player004Ref} />
            <PlayerIcon className={styles.rih} ref={player008Ref} />
          </div>
          <div>
            <PlayerIcon className={styles.lb} ref={player003Ref} />
            <PlayerIcon className={styles.lcb} ref={player006Ref} />
            <PlayerIcon className={styles.rcb} ref={player005Ref} />
            <PlayerIcon className={styles.rb} ref={player002Ref} />
          </div>
          <div>
            <PlayerIcon className={styles.gk} ref={player001Ref} />
          </div>
        </div>
      </main>
    </>
  );
}
