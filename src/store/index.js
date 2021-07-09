import { createStore } from "vuex";

import { CATEGORY, MAX_RACES } from "../core/const";
import { fetchRaces } from "../core/data";
import { currentTimeInSeconds } from "../core/utils";

export default createStore({
  state: {
    hasError: false,
    isLoading: true,
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
        .slice(0, MAX_RACES),
  },
  mutations: {
    setError(state, hasError) {
      state.hasError = hasError;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setActiveCategory(state, category) {
      state.activeCategory = category;
    },
    replaceRaces(state, newRaces) {
      state.races = newRaces;
    },
  },
  actions: {
    async loadRaces({ commit }) {
      try {
        const races = await fetchRaces();
        commit("replaceRaces", races);
        commit("setError", false);
      } catch (error) {
        commit("setError", true);
      }
      commit("setLoading", false);
    },
  },
  modules: {},
});
