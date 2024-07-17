import type { Meta, StoryObj } from "@storybook/react";
import { CommentFooter } from "../components/CommentFooter";

const meta = {
  title: "ElevenLabo/CommentFooter",
  component: CommentFooter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    likeCount: { control: "number" },
  },
  args: {
    likeCount: 12,
  },
} satisfies Meta<typeof CommentFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
