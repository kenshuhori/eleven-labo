import type { Meta, StoryObj } from "@storybook/react";
import { PostIconBox } from "../components/PostIconBox";

const meta = {
  title: "ElevenLabo/PostIconBox",
  component: PostIconBox,
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
} satisfies Meta<typeof PostIconBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
