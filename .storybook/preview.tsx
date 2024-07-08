import { ClerkProvider } from "@clerk/nextjs";
import type { Preview } from "@storybook/react";
import React from "react";
import theme from "../src/app/theme";

const preview: Preview = {
  parameters: {
    chakra: {
      theme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ClerkProvider>
        <Story />
      </ClerkProvider>
    ),
  ],
};

export default preview;
