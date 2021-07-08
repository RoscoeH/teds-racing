<template>
  <div class="race-item">
    <div class="meeting-name">
      {{ meetingName.toUpperCase() }}
      <span class="race-number">R{{ raceNumber }}</span>
    </div>
    <div
      class="time-remaining"
      v-bind:style="{ color: `var(--color-time-${timeColorIndex})` }"
    >
      {{ timeRemaining }}
    </div>
  </div>
</template>

<script>
export default {
  name: "RaceItem",
  props: {
    meetingName: {
      type: String,
      required: true,
    },
    raceNumber: {
      type: Number,
      required: true,
    },
    secondsRemaining: {
      type: Number,
      required: true,
    },
  },
  computed: {
    minutesRemaining: function () {
      return Math.floor(this.secondsRemaining / 60);
    },
    timeRemaining: function () {
      const seconds = this.secondsRemaining % 60;
      return `${
        this.minutesRemaining ? `${this.minutesRemaining}m ` : ""
      }${seconds}s`;
    },
    timeColorIndex: function () {
      if (this.minutesRemaining < 0) return 0;
      if (this.minutesRemaining < 1) return 1;
      if (this.minutesRemaining < 3) return 2;
      if (this.minutesRemaining < 5) return 3;
      return "hover";
    },
  },
};
</script>

<style scoped>
.race-item {
  display: flex;
  justify-content: space-between;
  color: var(--color-text);
  padding: var(--space-2) var(--space-1);
  cursor: pointer;
}

.race-item:hover {
  background-color: var(--color-hover);
}

.race-number {
  font-style: italic;
  color: var(--color-text-muted);
}

.time-remaining {
  font-weight: bold;
}
</style>
