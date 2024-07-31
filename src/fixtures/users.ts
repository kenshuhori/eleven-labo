import type { User } from "@prisma/client";

export const users: User[] = [
  {
    id: "cokekocoo",
    firstName: "コケ",
    lastName: null,
    username: null,
    hasImage: true,
    imageUrl: "https://example.com/cokekocoo.jpg",
    createdAt: new Date("2024-01-01T00:00:00Z"),
    deletedAt: null,
  },
];

export const defaultUser: User = users[0];
