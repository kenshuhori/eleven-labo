"use client";

import { listTheme } from "@/app/actions";
import { SkeletonTheme, Theme } from "@/components/Theme";
import useSWR from "swr";

export default function Page() {
  const { data: themes, error, isLoading } = useSWR("/themes", listTheme);

  return (
    <main>
      <>
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
                  likeCount={theme.likeCount}
                  postCount={0}
                  title={theme.title}
                  key={theme.id}
                />
              );
            })}
      </>
    </main>
  );
}
