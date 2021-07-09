<template>
  <div class="race-list">
    <RaceItem v-for="race in races" :key="race.key" v-bind="race" />
  </div>
</template>

<script>
import { currentTimeInSeconds } from "../core/utils";
import RaceItem from "./RaceItem";

export default {
  components: { RaceItem },
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

<style>
.race-item:not(:last-child) {
  border-bottom: 1px solid var(--color-primary-muted);
}
</style>
