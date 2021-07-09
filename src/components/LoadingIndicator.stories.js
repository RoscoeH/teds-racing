import LoadingIndicator from "./LoadingIndicator";

export default {
  title: "Components/LoadingIndicator",
  component: LoadingIndicator,
};

const Template = (args) => ({
  components: { LoadingIndicator },
  setup() {
    return { args };
  },
  template: '<LoadingIndicator v-bind="args" />',
});

export const Default = Template.bind({});
