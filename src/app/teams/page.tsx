"use client";

import { Header } from "@/stories/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header backUrl="/" />
      <main className={styles.main}>
        <h1>About Us | Eleven Labo</h1>
      </main>
    </>
  );
}
