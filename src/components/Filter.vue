<template>
  <div>
    <FilterItem
      class="filter-item"
      v-for="item in items"
      :key="item.label"
      v-bind:label="item.label"
      v-bind:isActive="item.active"
      @click="handleFilterClick(item.value)"
    />
  </div>
</template>

<script>
import { capitalize } from "vue";
import FilterItem from "./FilterItem";
export default {
  components: { FilterItem },
  props: {
    /** Selected filter value */
    selected: {
      type: String,
    },
    /** Array of possible filter values */
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
      // Map filter value into object with display label and active state
      return this.values.map((value) => ({
        label: capitalize(value),
        active: value === this.selected,
        value,
      }));
    },
  },
  methods: {
    handleFilterClick: function (value) {
      /**
       * Filter selected event
       */
      this.$emit("on-select", value);
    },
  },
};
</script>

<style>
.filter-item:not(:last-child) {
  margin-right: var(--space-1);
}
</style>
