import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";

const meta = {
  title: "ElevenLabo/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { width: "25", height: "24" },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "25",
    height: "24",
  },
};
