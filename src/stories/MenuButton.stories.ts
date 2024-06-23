import type { Meta, StoryObj } from "@storybook/react";
import { MenuButton } from "./MenuButton";

const meta = {
  title: "ElevenLabo/MenuButton",
  component: MenuButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { width: "25", height: "24" },
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "25",
    height: "24",
  },
};
