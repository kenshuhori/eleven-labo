import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";

const meta = {
  title: "ElevenLabo/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { backgroundColor: "#FFFFFF" },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundColor: "#FFFFFFF",
  },
};
