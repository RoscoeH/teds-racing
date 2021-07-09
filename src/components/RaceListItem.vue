<template>
  <div class="race-list-item">
    <div class="meeting-name">
      {{ meetingName.toUpperCase() }}
      <span class="race-number">R{{ raceNumber }}</span>
    </div>
    <div class="time-remaining" v-bind:class="timeClass">
      {{ timeRemaining }}
    </div>
  </div>
</template>

<script>
export default {
  name: "RaceListItem",
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
      const minutes = this.secondsRemaining >= 0 ? this.minutes : -this.minutes;
      const displaySeconds =
        this.secondsRemaining > -60 || minutes > 0 ? seconds : -seconds;
      const displayMinutes = this.minutes > 0 ? `${minutes}m ` : "";
      return `${displayMinutes}${displaySeconds}s`;
    },
    /** Returns the index of the time's color depending on the number of minutes remaining */
    timeColor: function () {
      if (this.secondsRemaining < 0) return "pink";
      if (this.minutes < 1) return "red";
      if (this.minutes < 3) return "orange";
      if (this.minutes < 5) return "yellow";
      return null;
    },
    timeClass: function () {
      return this.timeColor ? `time-color-${this.timeColor}` : "";
    },
  },
};
</script>

<style scoped>
.race-list-item {
  display: flex;
  justify-content: space-between;
  color: var(--color-text);
  padding: var(--space-3) var(--space-1);
  cursor: pointer;
  font-size: var(--font-size-1);
  line-height: 1em;
  max-width: 720px;
}

.race-list-item:hover {
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
