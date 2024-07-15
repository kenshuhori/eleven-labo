import type { Meta, StoryObj } from "@storybook/react";
import { Post } from "../components/Post";

const meta = {
  title: "ElevenLabo/Post",
  component: Post,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    author: { control: "text" },
    authorImage: { control: "text" },
    createdAt: { control: "text" },
    commentCount: { control: "number" },
    description: { control: "text" },
    postUrl: { control: "text" },
    likeCount: { control: "number" },
  },
  args: {
    author: "John Doe",
    authorImage: "https://example.com/john-doe.png",
    createdAt: "2024-01-01T00:00:00Z",
    commentCount: 8,
    description:
      "4-1-2-3で考えました。まずキーハーがXXXXなのは言うまでもありません。右SBはリヴァプールで今シーズン台頭したブラッドリーを選出したいと思います。",
    postUrl: "/posts/1",
    likeCount: 12,
  },
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
