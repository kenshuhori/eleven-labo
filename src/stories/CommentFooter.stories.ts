import { CommentFooter } from "@/components/CommentFooter";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/CommentFooter",
  component: CommentFooter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    commentId: { control: "number" },
    likeHistories: { control: "object" },
  },
  args: {
    commentId: 1,
    likeHistories: [],
  },
} satisfies Meta<typeof CommentFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
