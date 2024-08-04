import { Theme } from "@/components/Theme";
import type { Meta, StoryObj } from "@storybook/react";

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
    likeHistories: { control: "object" },
    postCount: { control: "number" },
    thumbnail: { control: "text" },
    title: { control: "text" },
  },
  args: {
    createdAt: "2021-09-01T00:00:00Z",
    id: 1,
    likeHistories: [],
    postCount: 0,
    thumbnail: "https://media.api-sports.io/football/leagues/39.png",
    title: "23-24のプレミアリーグベスト11を考えよう!!",
  },
} satisfies Meta<typeof Theme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
