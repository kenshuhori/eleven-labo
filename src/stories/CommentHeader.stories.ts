import { CommentHeader } from "@/components/CommentHeader";
import { defaultUser } from "@/fixtures/users";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/CommentHeader",
  component: CommentHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    author: { control: "object" },
    createdAt: { control: "text" },
  },
  args: {
    author: defaultUser,
    createdAt: new Date("2024-01-01T00:00:00Z"),
  },
} satisfies Meta<typeof CommentHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
