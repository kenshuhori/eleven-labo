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
    style: { control: "object" },
  },
  args: {
    style: {
      height: "17rem",
      position: "relative",
      width: "20rem",
    },
  },
} satisfies Meta<typeof FootballField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
