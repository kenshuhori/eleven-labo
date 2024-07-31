import { Post } from "@/components/Post";
import { defaultPostWithRelation } from "@/fixtures/posts";
import { defaultUser } from "@/fixtures/users";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/Post",
  component: Post,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    author: { control: "object" },
    commentCount: { control: "number" },
    fullSentence: { control: "boolean" },
    post: { control: "object" },
  },
  args: {
    author: defaultUser,
    commentCount: 0,
    fullSentence: true,
    post: defaultPostWithRelation,
  },
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
