import { shallowMount } from "@vue/test-utils";
import FilterItem from "@/components/FilterItem.vue";

const dummyFilterItem = {
  label: "Filter Item",
  isActive: false,
};

describe("FilterItem", () => {
  it("renders label text", () => {
    const wrapper = shallowMount(FilterItem, {
      props: dummyFilterItem,
    });

    expect(wrapper.text()).toContain(dummyFilterItem.label);
  });

  it("renders active state", () => {
    const isActive = true;

    const wrapper = shallowMount(FilterItem, {
      props: { ...dummyFilterItem, isActive },
    });

    expect(wrapper.attributes().class).toContain("active");
  });
});
