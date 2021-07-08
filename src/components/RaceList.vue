<template>
  <div class="race-list">
    <RaceItem
      v-for="race in sortedRaces"
      :key="race.meetingName"
      v-bind="race"
      class="test"
    />
  </div>
</template>

<script>
import RaceItem from "./RaceItem";

export default {
  components: { RaceItem },
  computed: {
    races: function () {
      console.log(this.$store);
      return this.$store.state.races.map((race) => ({
        ...race,
        secondsRemaining: Math.round(Math.random() * 300),
      }));
    },
    sortedRaces: function () {
      return this.races
        .slice()
        .sort((a, b) => a.secondsRemaining - b.secondsRemaining);
    },
  },
};
</script>

<style>
.race-item:not(:last-child) {
  border-bottom: 1px solid var(--color-primary-muted);
}
</style>
