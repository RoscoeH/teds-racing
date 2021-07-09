import { createStore } from "vuex";
import { CATEGORY } from "../core/const";

import { fetchRaces } from "../core/data";
import { currentTimeInSeconds } from "../core/utils";

export default createStore({
  state: {
    activeCategory: CATEGORY.HORSE,
    races: [],
  },
  getters: {
    activeRaces: (state) =>
      state.races
        .filter(
          (race) =>
            state.activeCategory === null ||
            race.category === state.activeCategory
        )
        .filter((race) => race.advertisedStart - currentTimeInSeconds() >= -60)
        .slice(0, 5),
  },
  mutations: {
    setActiveCategory(state, category) {
      state.activeCategory = category;
    },
    replaceRaces(state, newRaces) {
      state.races = newRaces;
    },
  },
  actions: {
    async loadRaces({ commit }) {
      const races = await fetchRaces();
      commit("replaceRaces", races);
    },
  },
  modules: {},
});
