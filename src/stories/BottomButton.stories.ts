import type { Meta, StoryObj } from "@storybook/react";
import { BottomButton } from "../components/BottomButton";

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
  },
  args: {
    label: "ボタン",
    href: "themes/1/posts/new",
  },
} satisfies Meta<typeof BottomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PostButton: Story = {
  args: {
    label: "投稿",
  },
};

export const CommentButton: Story = {
  args: {
    label: "コメント",
  },
};
