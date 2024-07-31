import { CommentIconBox } from "@/components/CommentIconBox";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/CommentIconBox",
  component: CommentIconBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    count: { control: "number" },
    style: { control: "object" },
  },
  args: {
    count: 4,
  },
} satisfies Meta<typeof CommentIconBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
