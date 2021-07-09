<template>
  <div class="races-view">
    <AppHeader />
    <div class="content">
      <RaceHeader />
      <RaceList />
    </div>
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
  max-width: 640px;
  margin: 0 auto;
  height: 100vh;
}

.content {
  padding: var(--space-3) var(--space-3);
}

@media only screen and (min-width: 640px) {
  .races-view {
    box-shadow: 0px 0px 32px 0px var(--color-primary-muted);
  }
  .content {
    padding: var(--space-4) var(--space-4);
  }
}
</style>
