"use client";

import { Header } from "@/stories/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>ベストイレブン研究所 | Eleven Labo</h1>
      </main>
    </>
  );
}
