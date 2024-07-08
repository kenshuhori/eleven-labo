"use client";

import { Header } from "@/components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header backUrl="/" />
      <main className={styles.main}>
        <h1>テーマ一覧 | Eleven Labo</h1>
      </main>
    </>
  );
}
