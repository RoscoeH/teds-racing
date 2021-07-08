<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <RaceItem meetingName="Capalaba" raceNumber="5" />
</template>

<script>
import RaceItem from "./components/RaceItem.vue";

export default {
  name: "App",
  components: {
    RaceItem,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
