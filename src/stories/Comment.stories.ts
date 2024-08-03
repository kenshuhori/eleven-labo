import { Comment } from "@/components/Comment";
import { defaultUser } from "@/fixtures/users";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/Comment",
  component: Comment,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    author: { control: "object" },
    comment: { control: "text" },
    createdAt: { control: "text" },
  },
  args: {
    author: defaultUser,
    createdAt: new Date("2024-01-01T00:00:00Z"),
    comment:
      "僕が考えてたものとほとんど同じです！1点だけ、右WGはサラーでもいいのかなと思ってます！あとCBはファンダイクにするかも悩みどころですよねー",
  },
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
