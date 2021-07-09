<template>
  <div class="race-header">
    <h2>Next Races</h2>
    <div class="filter">
      <span class="filter-label">Category</span>
      <Filter
        v-bind:values="values"
        v-bind:selected="selected"
        @on-select="handleOnSelect"
      />
    </div>
  </div>
</template>

<script>
import Filter from "./Filter";

export default {
  components: { Filter },
  data() {
    return {
      values: ["horse", "harness", "greyhound"],
    };
  },
  computed: {
    selected: function () {
      return this.$store.state.activeCategory;
    },
  },
  methods: {
    handleOnSelect: function (value) {
      // Remove filter if it's already active
      const categoryFilter = value === this.selected ? null : value;

      this.$store.commit("setActiveCategory", categoryFilter);
    },
  },
};
</script>

<style>
.race-header {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-1);
}

@media only screen and (min-width: 480px) {
  .race-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.filter {
  display: flex;
  align-items: center;
}

.filter-label {
  margin-right: var(--space-3);
  font-weight: 600;
}

@media only screen and (max-width: 560px) {
  .filter-label {
    display: none;
  }
}
</style>
