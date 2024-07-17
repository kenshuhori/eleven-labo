export const comments: PostComment[] = [
  {
    author: "John Doe",
    authorImage: "https://example.com/john-doe.png",
    createdAt: "2024-01-01T00:00:00Z",
    comment:
      "僕が考えてたものとほとんど同じです！1点だけ、右WGはサラーでもいいのかなと思ってます！あとCBはファンダイクにするかも悩みどころですよねー",
    id: 1,
    likeCount: 12,
  },
  {
    author: "Kakashi Hatake",
    authorImage: "https://example.com/john-doe.png",
    createdAt: "2024-01-05T00:00:00Z",
    comment: "サラーがいないのはちょっと考えられないです。だって得点王ですよ？",
    id: 2,
    likeCount: 2,
  },
  {
    author: "Satoru Gojo",
    authorImage: "https://example.com/john-doe.png",
    createdAt: "2024-06-05T00:00:00Z",
    comment: "ファンダイクはいい選択ですね。あとは、ドログバもいいかもしれません。",
    id: 3,
    likeCount: 20,
  },
];

export const defaultComment: PostComment = comments[0];
