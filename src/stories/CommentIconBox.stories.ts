import type { Meta, StoryObj } from "@storybook/react";
import { CommentIconBox } from "../components/CommentIconBox";

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
