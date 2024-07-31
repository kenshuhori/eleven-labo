import { ThemeHeader } from "@/components/ThemeHeader";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ElevenLabo/ThemeHeader",
  component: ThemeHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
  },
  args: {
    title: "テーマタイトル",
  },
} satisfies Meta<typeof ThemeHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
