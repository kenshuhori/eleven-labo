import type { Meta, StoryObj } from "@storybook/react";
import { FormationSelect } from "../components/FormationSelect";

const meta = {
  title: "ElevenLabo/FormationSelect",
  component: FormationSelect,
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
} satisfies Meta<typeof FormationSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
