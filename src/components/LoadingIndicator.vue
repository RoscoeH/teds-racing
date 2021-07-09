<template>
  <div class="loading-indicator">
    <div class="item" v-for="(item, index) in count" :key="index">
      <div class="dummy-race-name">
        <div
          class="dummy-text"
          v-bind:style="{ width: `${random(5, 9) * characterWidth}px` }"
        />
        <div
          class="dummy-text"
          v-bind:style="{ width: `${2 * characterWidth}px` }"
        />
      </div>
      <div
        class="dummy-text"
        v-bind:style="{ width: `${random(3, 5) * characterWidth}px` }"
      />
    </div>
  </div>
</template>

<script>
import { random } from "../core/utils";
import { MAX_RACES } from "../core/const";

export default {
  data() {
    return {
      count: MAX_RACES,
      characterWidth: 14,
    };
  },
  methods: {
    random,
  },
};
</script>

<style>
@keyframes pulse {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

.item {
  display: flex;
  justify-content: space-between;
  color: var(--color-text);
  padding: var(--space-3) var(--space-1);
  cursor: pointer;
}
.item:not(:last-child) {
  border-bottom: 1px solid var(--color-primary-muted);
}

.dummy-race-name {
  display: flex;
}
.dummy-race-name > div:first-child {
  margin-right: var(--space-2);
}

.dummy-text {
  height: var(--font-size-1);
  background: var(--color-primary-muted);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}
</style>
