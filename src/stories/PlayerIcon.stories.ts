import type { Meta, StoryObj } from "@storybook/react";
import { PlayerIcon } from "./PlayerIcon";

const meta = {
  title: "ElevenLabo/PlayerIcon",
  component: PlayerIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { label: "PlayerIcon" },
} satisfies Meta<typeof PlayerIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "Base",
  },
};
