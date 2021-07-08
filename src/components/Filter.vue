<template>
  <div>
    <FilterItem
      class="filter-item"
      v-for="item in items"
      :key="item.label"
      v-bind:label="item.label"
      v-bind:isActive="item.active"
    />
  </div>
</template>

<script>
import FilterItem from "./FilterItem";
export default {
  components: { FilterItem },
  props: {
    selected: {
      type: String,
    },
    values: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.length > 1;
      },
    },
  },
  computed: {
    items: function () {
      return this.values.map((value) => ({
        label: value.replace(/^./, value[0].toUpperCase()),
        active: value === this.selected,
      }));
    },
  },
};
</script>

<style>
.filter-item:not(:last-child) {
  margin-right: var(--space-1);
}
</style>
