"use client";

import { listTheme } from "@/app/actions";
import { Theme } from "@/components/Theme";
import { Skeleton } from "@chakra-ui/react";
import type { Theme as ThemeModel } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";

export default function Page() {
  const [themes, setThemes] = useState<ThemeModel[]>([]);

  const fetch = useCallback(async () => {
    const res = await listTheme();
    setThemes(res);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <main>
      {themes.length === 0 && <Skeleton style={{ height: "500px" }} />}
      {themes.map((theme) => {
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
    </main>
  );
}
