import { Formation } from "@/components/Formation";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/Formation",
  component: Formation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    formation: { control: "text" },
    style: { control: "object" },
  },
  args: {
    formation: {
      code: "4-3-3",
      name: "4-3-3",
    },
    style: {
      height: "30rem",
      position: "relative",
      width: "34rem",
    },
  },
} satisfies Meta<typeof Formation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeFourOneTwo: Story = {
  name: "3-4-1-2",
  args: {
    formation: {
      code: "3-4-1-2",
      name: "3-4-1-2",
    },
  },
};

export const ThreeFourTwoOne: Story = {
  name: "3-4-2-1",
  args: {
    formation: {
      code: "3-4-2-1",
      name: "3-4-2-1",
    },
  },
};

export const ThreeFourThreeDiamond: Story = {
  name: "3-4-3-Diamond",
  args: {
    formation: {
      code: "3-4-3-D",
      name: "3-4-3-D",
    },
  },
};

export const ThreeFourThree: Story = {
  name: "3-4-3",
  args: {
    formation: {
      code: "3-4-3",
      name: "3-4-3",
    },
  },
};

export const FourOneTwoThree: Story = {
  name: "4-1-2-3",
  args: {
    formation: {
      code: "4-1-2-3",
      name: "4-1-2-3",
    },
  },
};

export const FourOneFourOne: Story = {
  name: "4-1-4-1",
  args: {
    formation: {
      code: "4-1-4-1",
      name: "4-1-4-1",
    },
  },
};

export const FourTwoOneThree: Story = {
  name: "4-2-1-3",
  args: {
    formation: {
      code: "4-2-1-3",
      name: "4-2-1-3",
    },
  },
};

export const FourFourOneOne: Story = {
  name: "4-4-1-1",
  args: {
    formation: {
      code: "4-4-1-1",
      name: "4-4-1-1",
    },
  },
};

export const FourThreeThree: Story = {
  name: "4-3-3",
  args: {
    formation: {
      code: "4-3-3",
      name: "4-3-3",
    },
  },
};

export const FourFourTwoDiamond: Story = {
  name: "4-4-2-Diamond",
  args: {
    formation: {
      code: "4-4-2-D",
      name: "4-4-2-D",
    },
  },
};

export const FourFourTwo: Story = {
  name: "4-4-2",
  args: {
    formation: {
      code: "4-4-2",
      name: "4-4-2",
    },
  },
};

export const FourSixZero: Story = {
  name: "4-6-0",
  args: {
    formation: {
      code: "4-6-0",
      name: "4-6-0",
    },
  },
};

export const FiveFourOne: Story = {
  name: "5-4-1",
  args: {
    formation: {
      code: "5-4-1",
      name: "5-4-1",
    },
  },
};
