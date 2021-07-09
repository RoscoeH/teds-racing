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
  secondsRemaining: 5 * 60,
};

export const UnderFiveMinutes = Template.bind({});
UnderFiveMinutes.args = {
  meetingName: "Capalba",
  raceNumber: 6,
  secondsRemaining: 4 * 60 + 22,
};

export const UnderThreeMinutes = Template.bind({});
UnderThreeMinutes.args = {
  meetingName: "Capalba",
  raceNumber: 6,
  secondsRemaining: 2 * 60 + 57,
};

export const UnderOneMinute = Template.bind({});
UnderOneMinute.args = {
  meetingName: "Capalba",
  raceNumber: 6,
  secondsRemaining: 33,
};

export const Overdue = Template.bind({});
Overdue.args = {
  meetingName: "Capalba",
  raceNumber: 6,
  secondsRemaining: -99,
};

export const ReallyLongMeetingName = Template.bind({});
ReallyLongMeetingName.args = {
  meetingName: "Really long meeting name",
  raceNumber: 6,
  secondsRemaining: 88,
};
