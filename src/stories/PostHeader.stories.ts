import type { Meta, StoryObj } from "@storybook/react";
import { PostHeader } from "../components/PostHeader";

const meta = {
  title: "ElevenLabo/PostHeader",
  component: PostHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    author: { control: "text" },
    authorImage: { control: "text" },
    createdAt: { control: "text" },
  },
  args: {
    author: "John Doe",
    authorImage: "https://example.com/john-doe.png",
    createdAt: new Date("2024-01-01T00:00:00Z"),
  },
} satisfies Meta<typeof PostHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
