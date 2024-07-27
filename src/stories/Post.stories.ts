import { defaultPostWithRelation } from "@/fixtures/posts";
import type { Meta, StoryObj } from "@storybook/react";
import { Post } from "../components/Post";

const meta = {
  title: "ElevenLabo/Post",
  component: Post,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fullSentence: { control: "boolean" },
    post: { control: "object" },
  },
  args: {
    fullSentence: true,
    post: defaultPostWithRelation,
  },
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
