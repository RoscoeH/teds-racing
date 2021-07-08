<template>
  <div>
    <div class="meeting-name">
      {{ meetingName.toUpperCase() }}
      <span class="race-number">R{{ raceNumber }}</span>
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.meeting-name {
  color: blue;
}
</style>
