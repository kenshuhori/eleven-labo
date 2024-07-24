import type { Meta, StoryObj } from "@storybook/react";
import { Comment } from "../components/Comment";

const meta = {
  title: "ElevenLabo/Comment",
  component: Comment,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    createdAt: { control: "text" },
    comment: { control: "text" },
    id: { control: "number" },
    likeCount: { control: "number" },
  },
  args: {
    createdAt: new Date("2024-01-01T00:00:00Z"),
    comment:
      "僕が考えてたものとほとんど同じです！1点だけ、右WGはサラーでもいいのかなと思ってます！あとCBはファンダイクにするかも悩みどころですよねー",
    id: 1,
    likeCount: 12,
  },
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
