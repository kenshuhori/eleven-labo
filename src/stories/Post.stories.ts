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
    formation: { control: "text" },
    fullSentence: { control: "boolean" },
    id: { control: "number" },
    likeCount: { control: "number" },
    themeId: { control: "text" },
  },
  args: {
    author: "John Doe",
    authorImage: "https://example.com/john-doe.png",
    createdAt: "2024-01-01T00:00:00Z",
    commentCount: 8,
    description:
      "4-1-2-3で考えました。まずキーハーがXXXXなのは言うまでもありません。右SBはリヴァプールで今シーズン台頭したブラッドリーを選出したいと思います。",
    formation: { name: "4-1-2-3", code: "4-1-2-3" },
    fullSentence: true,
    id: 1,
    likeCount: 12,
    themeId: "1",
  },
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
