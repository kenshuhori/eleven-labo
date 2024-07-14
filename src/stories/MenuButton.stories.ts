import { MenuButton } from "@/components/MenuButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/MenuButton",
  component: MenuButton,
  parameters: {
    layout: "padded",
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
  tags: ["autodocs"],
  args: { iconBoxSize: 5 },
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconBoxSize: 5,
  },
};
