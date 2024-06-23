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
    borderColor: { control: "color" },
    color: { control: "color" },
    textStrokeColor: { control: "color" },
  },
  args: {
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    color: "#000000",
    number: 99,
  },
} satisfies Meta<typeof PlayerIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 99,
  },
};

export const Arsenal: Story = {
  args: {
    backgroundColor: "#EF0107",
    borderColor: "#063672",
    color: "#FFFFFF",
    number: 99,
    textStrokeColor: "#9C824A",
  },
};

export const Chelsea: Story = {
  args: {
    backgroundColor: "#034694",
    borderColor: "#DBA111",
    color: "#FFFFFF",
    number: 99,
  },
};

export const Liverpool: Story = {
  args: {
    backgroundColor: "#C8102E",
    borderColor: "#00B2A9",
    color: "#F6EB61",
    number: 99,
  },
};

export const ManchesterCity: Story = {
  args: {
    backgroundColor: "#6CABDD",
    borderColor: "#FFFFFF",
    color: "#1C2C5B",
    number: 99,
    textStrokeColor: "#FFFFFF",
  },
};

export const ManchesterUnited: Story = {
  args: {
    backgroundColor: "#DA291C",
    borderColor: "#000000",
    color: "#000000",
    number: 99,
    textStrokeColor: "#FBE122",
  },
};

export const Tottenham: Story = {
  args: {
    backgroundColor: "#FFFFFF",
    borderColor: "#132257",
    color: "#132257",
    number: 99,
  },
};
