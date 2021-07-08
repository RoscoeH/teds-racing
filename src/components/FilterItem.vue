<template>
  <button v-bind:class="{ active: isActive }">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    isActive: Boolean,
  },
};
</script>

<style>
button {
  padding: var(--space-1) var(--space-2);
  background-color: var(--color-background);
  color: var(--color-text-muted);
  border: 1px solid var(--color-primary-muted);
  font-size: var(--font-size-0);
  font-weight: bold;
  border-radius: 999px;
  box-sizing: border-box;
}
button:hover {
  color: var(--color-text);
  border-color: var(--color-primary);
}

.active {
  background-color: var(--color-primary);
  color: var(--color-background);
  border-color: var(--color-primary);
}
.active:hover {
  color: var(--color-primary-muted);
}
</style>
