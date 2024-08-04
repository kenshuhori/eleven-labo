import { LikeIconButton } from "@/components/LikeIconButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/LikeIconButton",
  component: LikeIconButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    count: { control: "number" },
    liked: { control: "boolean" },
  },
  args: {
    count: 4,
    onDecrement: () => {},
    onIncrement: () => {},
  },
} satisfies Meta<typeof LikeIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    liked: false,
  },
};

export const Liked: Story = {
  args: {
    liked: true,
  },
};
