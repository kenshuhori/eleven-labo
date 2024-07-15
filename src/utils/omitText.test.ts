import { expect, test } from "vitest";
import { omit } from "./omitText";

test("文字数が limit を下回る場合、渡された文字列が返ること", () => {
  const result = omit("1234", 5);
  expect(result).toStrictEqual("1234");
});

test("文字数が limit を上回る場合、省略された文字列が返ること", () => {
  const result = omit("1234567890", 5);
  expect(result).toStrictEqual("12345…");
});
