import RaceItem from "./RaceItem";

export default {
  title: "Components/RaceItem",
  component: RaceItem,
};

const Template = (args) => ({
  components: { RaceItem },
  setup() {
    return { args };
  },
  template: '<RaceItem v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  meetingName: "Capalba",
  raceNumber: 6,
};
