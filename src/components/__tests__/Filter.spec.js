import { mount } from "@vue/test-utils";
import Filter from "@/components/Filter.vue";
import { capitalize } from "vue";

const dummyFilter = {
  selected: "horse",
  values: ["horse", "harness", "greyhound"],
};

describe("Filter", () => {
  it("renders FilterItem for each value", () => {
    const wrapper = mount(Filter, {
      props: dummyFilter,
    });
    const filterItems = wrapper.findAll(".filter-item");

    expect(filterItems).toHaveLength(dummyFilter.values.length);
  });

  it("renders FilterItem label as capitalized value", () => {
    const wrapper = mount(Filter, {
      props: dummyFilter,
    });
    const wrapperText = wrapper.text();

    dummyFilter.values.forEach((value) =>
      expect(wrapperText).toContain(capitalize(value))
    );
  });

  it("renders selected value with active state class", () => {
    const valueIndex = dummyFilter.values.indexOf(dummyFilter.selected);

    const wrapper = mount(Filter, {
      props: { ...dummyFilter },
    });
    const filterItems = wrapper.findAll(".filter-item");
    const activeFilterItem = filterItems[valueIndex];

    expect(activeFilterItem.attributes().class).toContain("active");
  });

  it("emits on-select event when FilterItem is clicked", async () => {
    const filterItemIndex = 2;
    const expectedPayload = dummyFilter.values[filterItemIndex];

    const wrapper = mount(Filter, {
      props: { ...dummyFilter },
    });
    const filterItems = wrapper.findAll(".filter-item");
    const lastFilterItem = filterItems[filterItemIndex];
    await lastFilterItem.trigger("click");

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()["on-select"][0]).toEqual([expectedPayload]);
  });
});
