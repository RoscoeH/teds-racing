import { mount } from "@vue/test-utils";
import RaceHeader from "@/components/RaceHeader.vue";

const $store = {
  state: {
    activeCategory: "horse",
  },
  commit: jest.fn(),
};

describe("RaceHeader", () => {
  beforeEach(() => {
    $store.commit.mockReset();
  });

  it("commits setActiveCategory when clicking FilterItem", async () => {
    const filterItemIndex = 2;
    const wrapper = mount(RaceHeader, {
      global: {
        mocks: { $store },
      },
    });
    const filterItems = wrapper.findAll(".filter-item");
    const lastFilterItem = filterItems[filterItemIndex];
    await lastFilterItem.trigger("click");

    expect($store.commit).toHaveBeenCalledWith(
      "setActiveCategory",
      "greyhound"
    );
  });

  it("commits setActiveCategory with null payload when clicking active FilterItem", async () => {
    const filterItemIndex = 0;
    const wrapper = mount(RaceHeader, {
      global: {
        mocks: { $store },
      },
    });
    const filterItems = wrapper.findAll(".filter-item");
    const lastFilterItem = filterItems[filterItemIndex];
    await lastFilterItem.trigger("click");

    expect($store.commit).toHaveBeenCalledWith("setActiveCategory", null);
  });
});
