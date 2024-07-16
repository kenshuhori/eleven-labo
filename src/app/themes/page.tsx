"use client";

import { Theme } from "@/components/Theme";
import { themes } from "@/fixtures/themes";

export default function Page() {
  return (
    <main>
      {themes.map((theme) => {
        return (
          <Theme
            createdAt={theme.createdAt}
            id={theme.id}
            likeCount={theme.likeCount}
            postCount={theme.postCount}
            title={theme.title}
            key={theme.id}
          />
        );
      })}
    </main>
  );
}
