"use client";

import { Formation } from "@/components/Formation";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Formation formation="4-3-3" />
      </main>
    </>
  );
}
