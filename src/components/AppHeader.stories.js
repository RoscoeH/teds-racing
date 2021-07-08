import AppHeader from "./AppHeader";

export default {
  title: "Components/AppHeader",
  component: AppHeader,
};

const Template = (args) => ({
  components: { AppHeader },
  setup() {
    return { args };
  },
  template: '<AppHeader v-bind="args" />',
});

export const Default = Template.bind({});
