import { defaultUser } from "@/fixtures/users";
import type { Comment } from "@prisma/client";

export const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    comment:
      "僕が考えてたものとほとんど同じです！1点だけ、右WGはサラーでもいいのかなと思ってます！あとCBはファンダイクにするかも悩みどころですよねー",
    likeCount: 12,
    authorId: defaultUser.id,
    createdAt: new Date("2024-01-01T00:00:00Z"),
  },
  {
    id: 2,
    postId: 1,
    comment: "サラーがいないのはちょっと考えられないです。だって得点王ですよ？",
    likeCount: 2,
    authorId: defaultUser.id,
    createdAt: new Date("2024-01-01T00:00:00Z"),
  },
  {
    id: 3,
    postId: 1,
    comment: "ファンダイクはいい選択ですね。あとは、ドログバもいいかもしれません。",
    likeCount: 20,
    authorId: defaultUser.id,
    createdAt: new Date("2024-01-01T00:00:00Z"),
  },
];

export const defaultComment: Comment = comments[0];
