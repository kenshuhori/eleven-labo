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
    formation: { control: "object" },
    onChange: { control: "text" },
    style: { control: "object" },
  },
  args: {
    formation: {
      name: "4-4-2",
      code: "4-4-2",
    },
    onChange: () => {},
    style: {
      width: "20rem",
    },
  },
} satisfies Meta<typeof FormationSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
