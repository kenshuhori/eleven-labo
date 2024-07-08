import type { Meta, StoryObj } from "@storybook/react";
import { FootballField } from "../components/FootballField";

const meta = {
  title: "ElevenLabo/FootballField",
  component: FootballField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
    height: { control: "text" },
    position: { control: "text" },
    width: { control: "text" },
  },
  args: {
    height: "35rem",
    position: "relative",
    width: "35rem",
  },
} satisfies Meta<typeof FootballField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
