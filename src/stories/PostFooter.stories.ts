import { PostFooter } from "@/components/PostFooter";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/PostFooter",
  component: PostFooter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    commentCount: { control: "number" },
    description: { control: "text" },
    fullSentence: { control: "boolean" },
    postId: { control: "number" },
    likeHistories: { control: "object" },
  },
  args: {
    commentCount: 8,
    description:
      "4-1-2-3で考えました。まずキーハーがXXXXなのは言うまでもありません。右SBはリヴァプールで今シーズン台頭したブラッドリーを選出したいと思います。",
    postId: 1,
    likeHistories: [],
  },
} satisfies Meta<typeof PostFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: { fullSentence: true },
};

export const Omit: Story = {
  args: { fullSentence: false },
};
