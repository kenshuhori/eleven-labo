import type { Meta, StoryObj } from "@storybook/react";
import { FootballField } from "./FootballField";

const meta = {
  title: "ElevenLabo/FootballField",
  component: FootballField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FootballField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
