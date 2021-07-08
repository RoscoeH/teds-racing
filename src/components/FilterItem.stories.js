import FilterItem from "./FilterItem";

export default {
  title: "Components/FilterItem",
  component: FilterItem,
};

const Template = (args) => ({
  components: { FilterItem },
  setup() {
    return { args };
  },
  template: '<FilterItem v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Horses",
};

export const Selected = Template.bind({});
Selected.args = {
  label: "Horses",
  isActive: true,
};
