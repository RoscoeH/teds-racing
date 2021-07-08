import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import RaceHeader from "./RaceHeader";

export default {
  title: "Components/RaceHeader",
  component: RaceHeader,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone5",
    },
  },
};

const Template = (args) => ({
  components: { RaceHeader },
  setup() {
    return { args };
  },
  template: '<RaceHeader v-bind="args" />',
});

export const SmallWidth = Template.bind({});

export const MediumWidth = Template.bind({});
MediumWidth.parameters = {
  viewport: {
    defaultViewport: "pixel",
  },
};

export const LargeWidth = Template.bind({});
LargeWidth.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
