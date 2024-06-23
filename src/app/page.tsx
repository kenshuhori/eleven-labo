"use client";

import { Header } from "@/stories/Header";
import { PlayerIcon } from "@/stories/PlayerIcon";
import { VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const playerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!playerRef.current) return;

    const ballSvg = playerRef.current;
    ballSvg.onpointermove = (event) => {
      if (event.buttons) {
        const horizon = ballSvg.offsetLeft + event.movementX;
        if (horizon < 50 || horizon > window.innerWidth - 100) return;
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
      <main>
        <VStack>
          <div className={styles.footballField}>
            <div ref={playerRef}>
              <PlayerIcon />
            </div>
          </div>
        </VStack>
      </main>
    </>
  );
}
