import { app } from "@storybook/vue3";

import RaceList from "./RaceList";
import store from "../store";

app.use(store);
store.dispatch("loadRaces");
setInterval(() => {
  store.dispatch("loadRaces");
}, 2 * 60 * 1000);

export default {
  title: "Components/RaceList",
  component: RaceList,
};

const Template = (args) => ({
  components: { RaceList },
  setup() {
    return { args };
  },
  template: '<RaceList v-bind="args" />',
  store,
});

export const Default = Template.bind({});
Default.args = {};
