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
    /** The meeting-name of the race */
    meetingName: {
      type: String,
      required: true,
    },
    /** The race number */
    raceNumber: {
      type: Number,
      required: true,
    },
    /** Number of seconds remaining before race start */
    secondsRemaining: {
      type: Number,
      required: true,
    },
  },
  computed: {
    /** Returns the number of minutes in the time */
    minutes: function () {
      return Math.floor(Math.abs(this.secondsRemaining) / 60);
    },
    /** Returns the time remaining in the format "<minutes>m <seconds>s".  */
    timeRemaining: function () {
      const seconds = this.secondsRemaining % 60;
      return `${this.minutes > 0 ? `${this.minutes}m ` : ""}${seconds}s`;
    },
    /** Returns the index of the time's color depending on the number of minutes remaining */
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
  padding: var(--space-3) var(--space-1);
  cursor: pointer;
}

.race-item:hover {
  background-color: var(--color-hover);
}

.meeting-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: var(--space-3);
}

.race-number {
  font-style: italic;
  color: var(--color-text-muted);
}

.time-remaining {
  white-space: nowrap;
  font-weight: bold;
}
</style>
