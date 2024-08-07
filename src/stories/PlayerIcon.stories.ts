import { PlayerIcon } from "@/components/PlayerIcon";
import { defaultPlayer } from "@/fixtures/players";
import { defaultTeam } from "@/fixtures/teams";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/PlayerIcon",
  component: PlayerIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconMode: { control: "radio" },
    player: { control: "object" },
  },
  args: {
    iconMode: "number",
    position: 99,
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
      number: 99,
      team: defaultTeam({
        backgroundColor: "#EF0107",
        borderColor: "#063672",
        color: "#FFFFFF",
        textShadowColor: "#9C824A",
      }),
    }),
  },
};

export const Chelsea: Story = {
  args: {
    player: defaultPlayer({
      number: 99,
      team: defaultTeam({
        backgroundColor: "#034694",
        borderColor: "#DBA111",
        color: "#FFFFFF",
      }),
    }),
  },
};

export const Liverpool: Story = {
  args: {
    player: defaultPlayer({
      number: 99,
      team: defaultTeam({
        backgroundColor: "#C8102E",
        borderColor: "#00B2A9",
        color: "#F6EB61",
      }),
    }),
  },
};

export const ManchesterCity: Story = {
  args: {
    player: defaultPlayer({
      number: 99,
      team: defaultTeam({
        backgroundColor: "#6CABDD",
        borderColor: "#FFFFFF",
        color: "#1C2C5B",
        textShadowColor: "#FFFFFF",
      }),
    }),
  },
};

export const ManchesterUnited: Story = {
  args: {
    player: defaultPlayer({
      number: 99,
      team: defaultTeam({
        backgroundColor: "#DA291C",
        borderColor: "#000000",
        color: "#000000",
        textShadowColor: "#FBE122",
      }),
    }),
  },
};

export const Tottenham: Story = {
  args: {
    player: defaultPlayer({
      number: 99,
      team: defaultTeam({
        backgroundColor: "#FFFFFF",
        borderColor: "#132257",
        color: "#132257",
      }),
    }),
  },
};
