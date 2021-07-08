import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import RacesView from "./RacesView";

export default {
  title: "Views/RacesView",
  component: RacesView,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone5",
    },
  },
};

const Template = (args) => ({
  components: { RacesView },
  setup() {
    return { args };
  },
  template: '<RacesView v-bind="args" />',
});

export const MobileSmall = Template.bind({});

export const MobileLarge = Template.bind({});
MobileLarge.parameters = {
  viewport: {
    defaultViewport: "pixel",
  },
};

export const Desktop = Template.bind({});
Desktop.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
