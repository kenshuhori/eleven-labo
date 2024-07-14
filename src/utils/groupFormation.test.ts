import { formations } from "@/fixtures/formations";
import { expect, test } from "vitest";
import { groupedFormation } from "./groupFormation";

test("グループ化されたフォーメーション配列が返ること", () => {
  const result = groupedFormation(formations);
  expect(result).toStrictEqual([
    {
      category: "3バック",
      options: [
        {
          code: "3-4-1-2",
          name: "3-4-1-2",
          value: "3-4-1-2",
          label: "3-4-1-2",
        },
        {
          code: "3-4-2-1",
          name: "3-4-2-1",
          value: "3-4-2-1",
          label: "3-4-2-1",
        },
        {
          code: "3-4-3-D",
          name: "3-4-3（ダイヤモンド）",
          value: "3-4-3-D",
          label: "3-4-3（ダイヤモンド）",
        },
        {
          code: "3-4-3",
          name: "3-4-3",
          value: "3-4-3",
          label: "3-4-3",
        },
      ],
    },
    {
      category: "4バック",
      options: [
        {
          code: "4-1-2-3",
          name: "4-1-2-3",
          value: "4-1-2-3",
          label: "4-1-2-3",
        },
        {
          code: "4-1-4-1",
          name: "4-1-4-1",
          value: "4-1-4-1",
          label: "4-1-4-1",
        },
        {
          code: "4-2-1-3",
          name: "4-2-1-3",
          value: "4-2-1-3",
          label: "4-2-1-3",
        },
        {
          code: "4-2-3-1",
          name: "4-2-3-1",
          value: "4-2-3-1",
          label: "4-2-3-1",
        },
        {
          code: "4-3-3",
          name: "4-3-3",
          value: "4-3-3",
          label: "4-3-3",
        },
        {
          code: "4-4-1-1",
          name: "4-4-1-1",
          value: "4-4-1-1",
          label: "4-4-1-1",
        },
        {
          code: "4-4-2-D",
          name: "4-4-2（ダイヤモンド）",
          value: "4-4-2-D",
          label: "4-4-2（ダイヤモンド）",
        },
        {
          code: "4-4-2",
          name: "4-4-2（フラット）",
          value: "4-4-2",
          label: "4-4-2（フラット）",
        },
        {
          code: "4-6-0",
          name: "4-6-0（ゼロトップ）",
          value: "4-6-0",
          label: "4-6-0（ゼロトップ）",
        },
      ],
    },
    {
      category: "5バック",
      options: [
        {
          code: "5-4-1",
          name: "5-4-1",
          value: "5-4-1",
          label: "5-4-1",
        },
      ],
    },
    {
      category: "その他",
      options: [],
    },
  ]);
});
