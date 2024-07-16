import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "../components/Theme";

const meta = {
  title: "ElevenLabo/Theme",
  component: Theme,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    createdAt: { control: "date" },
    id: { control: "number" },
    likeCount: { control: "number" },
    postCount: { control: "number" },
    title: { control: "text" },
  },
  args: {
    createdAt: "2021-09-01T00:00:00Z",
    id: 1,
    likeCount: 0,
    postCount: 0,
    title: "23-24のプレミアリーグベスト11を考えよう!!",
  },
} satisfies Meta<typeof Theme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
