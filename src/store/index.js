import { createStore } from "vuex";

import { fetchRaces } from "../core/data";

console.log(fetchRaces().then((res) => console.log(res)));

export default createStore({
  state: {
    races: [
      { meetingName: "Capalaba", raceNumber: 2, advertisedStart: 1625719200 },
      {
        meetingName: "Kembla Grange",
        raceNumber: 7,
        advertisedStart: 1625719200 + 60,
        category: 0,
      },
      { meetingName: "Wagga", raceNumber: 3, advertisedStart: 1625719200 },
      {
        meetingName: "Redcliffe",
        raceNumber: 5,
        advertisedStart: 1625719200 + 2 * 60,
        category: 1,
      },
      {
        meetingName: "Grafton",
        raceNumber: 10,
        advertisedStart: 1625719200 + 3 * 60,
        category: 2,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
