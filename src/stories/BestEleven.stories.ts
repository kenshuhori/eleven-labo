import { BestEleven } from "@/components/BestEleven";
import { players } from "@/fixtures/players";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/BestEleven",
  component: BestEleven,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    formationCode: { control: "text" },
    style: { control: "object" },
  },
  args: {
    formationCode: "4-3-3",
    eleven: [
      {
        positionCode: 1,
        player: players[1],
      },
      {
        positionCode: 2,
        player: players[2],
      },
      {
        positionCode: 3,
        player: players[3],
      },
      {
        positionCode: 4,
        player: players[4],
      },
      {
        positionCode: 5,
        player: players[5],
      },
      {
        positionCode: 6,
        player: players[6],
      },
      {
        positionCode: 7,
        player: players[7],
      },
      {
        positionCode: 8,
        player: players[8],
      },
      {
        positionCode: 9,
        player: players[1],
      },
      {
        positionCode: 10,
        player: players[1],
      },
      {
        positionCode: 11,
        player: players[1],
      },
    ],
    style: {
      height: "30rem",
      position: "relative",
      width: "34rem",
    },
  },
} satisfies Meta<typeof BestEleven>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeFourOneTwo: Story = {
  name: "3-4-1-2",
  args: {
    formationCode: "3-4-1-2",
  },
};

export const ThreeFourTwoOne: Story = {
  name: "3-4-2-1",
  args: {
    formationCode: "3-4-2-1",
  },
};

export const ThreeFourThreeDiamond: Story = {
  name: "3-4-3-Diamond",
  args: {
    formationCode: "3-4-3-D",
  },
};

export const ThreeFourThree: Story = {
  name: "3-4-3",
  args: {
    formationCode: "3-4-3",
  },
};

export const FourOneTwoThree: Story = {
  name: "4-1-2-3",
  args: {
    formationCode: "4-1-2-3",
  },
};

export const FourOneFourOne: Story = {
  name: "4-1-4-1",
  args: {
    formationCode: "4-1-4-1",
  },
};

export const FourTwoOneThree: Story = {
  name: "4-2-1-3",
  args: {
    formationCode: "4-2-1-3",
  },
};

export const FourFourOneOne: Story = {
  name: "4-4-1-1",
  args: {
    formationCode: "4-4-1-1",
  },
};

export const FourThreeThree: Story = {
  name: "4-3-3",
  args: {
    formationCode: "4-3-3",
  },
};

export const FourFourTwoDiamond: Story = {
  name: "4-4-2-Diamond",
  args: {
    formationCode: "4-4-2-D",
  },
};

export const FourFourTwo: Story = {
  name: "4-4-2",
  args: {
    formationCode: "4-4-2",
  },
};

export const FourSixZero: Story = {
  name: "4-6-0",
  args: {
    formationCode: "4-6-0",
  },
};

export const FiveFourOne: Story = {
  name: "5-4-1",
  args: {
    formationCode: "5-4-1",
  },
};
