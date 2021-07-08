import Filter from "./Filter";

export default {
  title: "Components/Filter",
  component: Filter,
};

const Template = (args) => ({
  components: { Filter },
  setup() {
    return { args };
  },
  template: '<Filter v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  values: ["horse", "harness", "greyhound"],
  selected: "horse",
};
