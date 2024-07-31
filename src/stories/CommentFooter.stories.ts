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
    count: { control: "number" },
  },
  args: {
    count: 12,
  },
} satisfies Meta<typeof CommentFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
