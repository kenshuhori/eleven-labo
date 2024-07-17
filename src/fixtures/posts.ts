export const posts: Post[] = [
  {
    author: "John Doe",
    authorImage: "https://example.com/john-doe.png",
    commentCount: 8,
    createdAt: "2024-01-01T00:00:00Z",
    description:
      "4-1-2-3で考えました。まずキーハーがXXXXなのは言うまでもありません。右SBはリヴァプールで今シーズン台頭したブラッドリーを選出したいと思います。",
    formation: {
      code: "4-1-2-3",
      name: "4-1-2-3",
    },
    id: 1,
    likeCount: 12,
  },
  {
    author: "Taro Yamada",
    authorImage: "https://example.com/john-doe.png",
    commentCount: 2,
    createdAt: "2024-04-01T00:00:00Z",
    description:
      "3-4-3で考えました。まずキーハーがXXXXなのは言うまでもありません。右SBはリヴァプールで今シーズン台頭したブラッドリーを選出したいと思います。",
    formation: {
      code: "3-4-3",
      name: "3-4-3",
    },
    id: 2,
    likeCount: 5,
  },
];

export const defaultPost: Post = posts[0];
