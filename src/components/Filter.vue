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
    activeIndex: {
      type: Number,
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
      console.log(this.values, this.activeIndex);
      return this.values.map((value, index) => ({
        label: value.replace(/^./, value[0].toUpperCase()),
        active: index === this.activeIndex,
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
