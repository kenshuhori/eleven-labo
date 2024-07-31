import { PlayerSelect } from "@/components/PlayerSelect";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/PlayerSelect",
  component: PlayerSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
  argTypes: {
    onChange: { control: "text" },
  },
  args: {
    onChange: () => {},
    style: {
      width: "20rem",
    },
  },
} satisfies Meta<typeof PlayerSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
