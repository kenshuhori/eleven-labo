"use client";

import { Button } from "@/stories/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>ベストイレブン研究所 | Eleven Labo</h1>
        <Button label={"クリック"} />
      </main>
    </>
  );
}
