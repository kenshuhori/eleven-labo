"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Theme } from "@/components/Theme";
import { themes } from "@/fixtures/themes";

export default function Home() {
  return (
    <>
      <Header backUrl="/" />
      <main>
        {themes.map((theme) => {
          return (
            <Theme
              createdAt={theme.createdAt}
              likeCount={theme.likeCount}
              postCount={theme.postCount}
              title={theme.title}
              url={theme.url}
              key={theme.url}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}
