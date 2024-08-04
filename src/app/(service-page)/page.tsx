"use client";

import { listTheme } from "@/app/actions";
import { ErrorComponent } from "@/components/ErrorComponent";
import { SkeletonTheme, Theme } from "@/components/Theme";
import useSWR from "swr";

export default function Page() {
  const { data: themes, error, isLoading } = useSWR("/themes", listTheme);

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <main>
      {isLoading
        ? [1, 2, 3, 4].map((i) => {
            // ざっくり4つ分のスケルトンを表示
            return <SkeletonTheme key={i} />;
          })
        : themes?.map((theme) => {
            return (
              <Theme
                createdAt={theme.createdAt.toISOString()}
                id={theme.id}
                likeHistories={theme.likeHistories}
                postCount={theme.posts.length}
                thumbnail={theme.thumbnail}
                title={theme.title}
                key={theme.id}
              />
            );
          })}
    </main>
  );
}
