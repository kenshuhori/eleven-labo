"use client";

import { Theme } from "@/components/Theme";

export default async function Page() {
  const response = await fetch("http://localhost:3000/api/themes", {
    cache: "no-store",
  });

  const { themes }: { themes: Theme[] } = await response.json();

  return (
    <main>
      {themes.map((theme) => {
        return (
          <Theme
            createdAt={theme.createdAt}
            id={theme.id}
            likeCount={theme.likeCount}
            postCount={0}
            title={theme.title}
            key={theme.id}
          />
        );
      })}
    </main>
  );
}
