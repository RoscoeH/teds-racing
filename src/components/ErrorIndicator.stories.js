import ErrorIndicator from "./ErrorIndicator";

export default {
  title: "Components/ErrorIndicator",
  component: ErrorIndicator,
};

const Template = (args) => ({
  components: { ErrorIndicator },
  setup() {
    return { args };
  },
  template: '<ErrorIndicator v-bind="args" />',
});

export const Default = Template.bind({});
