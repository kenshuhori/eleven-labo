import type { Meta, StoryObj } from "@storybook/react";
import { Post } from "../components/Post";

const meta = {
  title: "ElevenLabo/Post",
  component: Post,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    createdAt: { control: "text" },
    description: { control: "text" },
    formationCode: { control: "text" },
    fullSentence: { control: "boolean" },
    id: { control: "number" },
    likeCount: { control: "number" },
  },
  args: {
    createdAt: new Date("2024-01-01T00:00:00Z"),
    description:
      "4-1-2-3で考えました。まずキーハーがXXXXなのは言うまでもありません。右SBはリヴァプールで今シーズン台頭したブラッドリーを選出したいと思います。",
    formationCode: "4-1-2-3",
    fullSentence: true,
    id: 1,
    likeCount: 12,
    pos1PlayerId: 1,
    pos2PlayerId: 2,
    pos3PlayerId: 3,
    pos4PlayerId: 4,
    pos5PlayerId: 5,
    pos6PlayerId: 6,
    pos7PlayerId: 7,
    pos8PlayerId: 8,
    pos9PlayerId: 9,
    pos10PlayerId: 10,
    pos11PlayerId: 11,
    themeId: 1,
  },
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
