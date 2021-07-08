<template>
  <div class="race-list">
    <RaceItem v-for="race in races" :key="race.meetingName" v-bind="race" />
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
    this.interval = setInterval(() => {
      this.now = currentTimeInSeconds();
    });
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  computed: {
    races: function () {
      return this.$store.getters.activeRaces
        .map((race) => ({
          ...race,
          secondsRemaining: race.advertisedStart - this.now,
        }))
        .slice(0, 5);
    },
  },
};
</script>

<style>
.race-item:not(:last-child) {
  border-bottom: 1px solid var(--color-primary-muted);
}
</style>
