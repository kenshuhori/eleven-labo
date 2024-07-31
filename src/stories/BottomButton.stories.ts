import { BottomButton } from "@/components/BottomButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/BottomButton",
  component: BottomButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    href: { control: "text" },
    style: { control: "object" },
  },
  args: {
    style: {
      width: "34rem",
    },
  },
} satisfies Meta<typeof BottomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PostButton: Story = {
  args: {
    href: "themes/1/posts/new",
    label: "投稿",
  },
};

export const CommentButton: Story = {
  args: {
    href: "posts/1/comments/new",
    label: "コメント",
  },
};
