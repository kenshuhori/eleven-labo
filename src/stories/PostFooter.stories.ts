import type { Meta, StoryObj } from "@storybook/react";
import { PostFooter } from "../components/PostFooter";

const meta = {
  title: "ElevenLabo/PostFooter",
  component: PostFooter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    commentCount: { control: "number" },
    createdAt: { control: "text" },
    description: { control: "text" },
    postUrl: { control: "text" },
    likeCount: { control: "number" },
  },
  args: {
    commentCount: 8,
    createdAt: "2024-01-01T00:00:00Z",
    description:
      "4-1-2-3で考えました。まずキーハーがXXXXなのは言うまでもありません。右SBはリヴァプールで今シーズン台頭したブラッドリーを選出したいと思います。",
    postUrl: "/post/1",
    likeCount: 12,
  },
} satisfies Meta<typeof PostFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
