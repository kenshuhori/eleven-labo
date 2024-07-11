import type { Preview } from "@storybook/react";
import React from "react";
import theme from "./theme";

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
  decorators: [(Story) => <Story />],
};

export default preview;
