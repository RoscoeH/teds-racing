<template>
  <AppHeader />
  <div class="races-view">
    <RaceHeader />
    <RaceList />
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import RaceHeader from "./RaceHeader.vue";
import RaceList from "./RaceList.vue";

export default {
  components: { AppHeader, RaceHeader, RaceList },
};
</script>

<style>
.races-view {
  padding: var(--space-3) var(--space-3) 0;
}
</style>
