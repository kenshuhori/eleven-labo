import { CommentForm } from "@/components/CommentForm";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/CommentForm",
  component: CommentForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    postId: { control: "number" },
    style: { control: "object" },
  },
  args: {
    postId: 0,
    style: {
      width: "34rem",
    },
  },
} satisfies Meta<typeof CommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
