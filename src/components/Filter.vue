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
        value,
      }));
    },
  },
  methods: {
    handleFilterClick: function (value) {
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
