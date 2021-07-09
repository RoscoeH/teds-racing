<template>
  <div class="race-list">
    <LoadingIndicator v-if="isLoading" />
    <div v-else>
      <ErrorIndicator v-if="hasError" />
      <div v-else>
        <RaceListItem v-for="race in races" :key="race.key" v-bind="race" />
      </div>
    </div>
  </div>
</template>

<script>
import { currentTimeInSeconds } from "../core/utils";
import RaceListItem from "./RaceListItem";
import LoadingIndicator from "./LoadingIndicator.vue";
import ErrorIndicator from "./ErrorIndicator.vue";

export default {
  components: { RaceListItem, LoadingIndicator, ErrorIndicator },
  data() {
    return {
      now: currentTimeInSeconds(),
    };
  },
  created() {
    // Every second, calculate the current time in seconds
    this.interval = setInterval(() => {
      this.now = currentTimeInSeconds();
    });
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  computed: {
    isLoading: function () {
      return this.$store.state.isLoading;
    },
    hasError: function () {
      return this.$store.state.hasError;
    },
    races: function () {
      // Map each race to calculate a unique key and the seconds remaining
      return this.$store.getters.activeRaces.map((race) => ({
        ...race,
        secondsRemaining: race.advertisedStart - this.now,
        key: `${race.category}-${race.meetingName}-${race.raceNumber}`,
      }));
    },
  },
};
</script>

<style scoped>
.race-list-item:not(:last-child) {
  border-bottom: 1px solid var(--color-primary-muted);
}
</style>
