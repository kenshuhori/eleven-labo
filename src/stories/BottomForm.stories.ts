import type { Meta, StoryObj } from "@storybook/react";
import { BottomForm } from "../components/BottomForm";

const meta = {
  title: "ElevenLabo/BottomForm",
  component: BottomForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    href: { control: "text" },
    style: { control: "object" },
  },
  args: {
    label: "投稿",
    href: "themes/1/posts/new",
    style: {
      width: "34rem",
    },
  },
} satisfies Meta<typeof BottomForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
