"use client";

import { Formation } from "@/components/Formation";
import { defaultFormation } from "@/fixtures/formations";

export default function Page() {
  return (
    <main>
      <Formation formation={defaultFormation} />
    </main>
  );
}
