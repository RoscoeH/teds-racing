import { createStore } from "vuex";
import { CATEGORY } from "../core/const";

import { fetchRaces } from "../core/data";

console.log(fetchRaces().then((res) => console.log(res)));

export default createStore({
  state: {
    activeCategory: CATEGORY.HORSE,
    races: [
      { meetingName: "Capalaba", raceNumber: 2, advertisedStart: 1625719200 },
      {
        meetingName: "Kembla Grange",
        raceNumber: 7,
        advertisedStart: 1625719200 + 60,
        category: "horse",
      },
      { meetingName: "Wagga", raceNumber: 3, advertisedStart: 1625719200 },
      {
        meetingName: "Redcliffe",
        raceNumber: 5,
        advertisedStart: 1625719200 + 2 * 60,
        category: "greyhound",
      },
      {
        meetingName: "Grafton",
        raceNumber: 10,
        advertisedStart: 1625719200 + 3 * 60,
        category: "harness",
      },
    ],
  },
  getters: {
    activeRaces: (state) =>
      state.races.filter((race) => race.category === state.activeCategory),
  },
  mutations: {},
  actions: {},
  modules: {},
});
