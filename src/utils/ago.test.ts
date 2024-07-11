import dayjs from "dayjs";
import { expect, test } from "vitest";
import { transformAgo } from "./ago";

test("1 second ago", () => {
  const secondAgo = dayjs().subtract(1, "second").toISOString();
  expect(transformAgo(secondAgo)).toBe("a few seconds ago");
});

test("1 minutes ago", () => {
  const minuteAgo = dayjs().subtract(1, "minutes").toISOString();
  expect(transformAgo(minuteAgo)).toBe("a minute ago");
});

test("1 hour ago", () => {
  const AnHourAgo = dayjs().subtract(1, "hour").toISOString();
  expect(transformAgo(AnHourAgo)).toBe("an hour ago");
});

test("1 day ago", () => {
  const yesterday = dayjs().subtract(1, "day").toISOString();
  expect(transformAgo(yesterday)).toBe("a day ago");
});

test("1 month ago", () => {
  const lastMonth = dayjs().subtract(1, "month").toISOString();
  expect(transformAgo(lastMonth)).toBe("a month ago");
});

test("1 year ago", () => {
  const lastYear = dayjs().subtract(1, "year").toISOString();
  expect(transformAgo(lastYear)).toBe("a year ago");
});
