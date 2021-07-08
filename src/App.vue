<template>
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
:root {
  --color-background: #ffffff;
  --color-primary: #283ad9;
  --color-text: #333333;
  --color-primary-muted: rgba(40, 58, 217, 0.15);
  --color-text-muted: #595959;
  --space-0: 4px;
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 32px;
  --space-4: 64px;
}

html {
  font-family: "Work Sans", sans-serif;
}
</style>
