import type { Meta, StoryObj } from "@storybook/react";
import { CommentHeader } from "../components/CommentHeader";

const meta = {
  title: "ElevenLabo/CommentHeader",
  component: CommentHeader,
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
    createdAt: "2024-01-01T00:00:00Z",
  },
} satisfies Meta<typeof CommentHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
