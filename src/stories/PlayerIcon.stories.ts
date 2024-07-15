import { PlayerIcon } from "@/components/PlayerIcon";
import { defaultPlayer } from "@/fixtures/players";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/PlayerIcon",
  component: PlayerIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    player: { control: "object" },
    className: { control: "text" },
  },
  args: {
    player: {
      name: "Player",
      number: 99,
      team: {
        code: "???",
        name: "Team",
        backgroundColor: "#FFFFFF",
        borderColor: "#000000",
        color: "#000000",
        textShadowColor: null,
      },
    },
  },
} satisfies Meta<typeof PlayerIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    player: defaultPlayer({}),
  },
};

export const Arsenal: Story = {
  args: {
    player: defaultPlayer({
      backgroundColor: "#EF0107",
      borderColor: "#063672",
      color: "#FFFFFF",
      number: 99,
      textShadowColor: "#9C824A",
    }),
  },
};

export const Chelsea: Story = {
  args: {
    player: defaultPlayer({
      backgroundColor: "#034694",
      borderColor: "#DBA111",
      color: "#FFFFFF",
      number: 99,
    }),
  },
};

export const Liverpool: Story = {
  args: {
    player: defaultPlayer({
      backgroundColor: "#C8102E",
      borderColor: "#00B2A9",
      color: "#F6EB61",
      number: 99,
    }),
  },
};

export const ManchesterCity: Story = {
  args: {
    player: defaultPlayer({
      backgroundColor: "#6CABDD",
      borderColor: "#FFFFFF",
      color: "#1C2C5B",
      number: 99,
      textShadowColor: "#FFFFFF",
    }),
  },
};

export const ManchesterUnited: Story = {
  args: {
    player: defaultPlayer({
      backgroundColor: "#DA291C",
      borderColor: "#000000",
      color: "#000000",
      number: 99,
      textShadowColor: "#FBE122",
    }),
  },
};

export const Tottenham: Story = {
  args: {
    player: defaultPlayer({
      backgroundColor: "#FFFFFF",
      borderColor: "#132257",
      color: "#132257",
      number: 99,
    }),
  },
};
