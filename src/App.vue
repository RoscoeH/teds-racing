<template>
  <AppHeader />
  <RaceItem meetingName="Capalaba" raceNumber="5" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import RaceItem from "./components/RaceItem.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    RaceItem,
  },
};
</script>

<style></style>
