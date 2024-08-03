import type { User } from "@prisma/client";
import { expect, test } from "vitest";
import { authorAvatar } from "./authorAvatar";

test("文字数が limit を下回る場合、渡された文字列が返ること", () => {
  const user: User = {
    id: "user-id-00xx",
    firstName: "John",
    lastName: "Doe",
    username: "jj",
    hasImage: false,
    imageUrl: "https://example.com/image.jpg",
    createdAt: new Date("2021-01-01"),
    deletedAt: null,
  };
  const result = authorAvatar(user);
  expect(result).toStrictEqual({
    name: "John",
    image: "https://example.com/image.jpg",
  });
});
