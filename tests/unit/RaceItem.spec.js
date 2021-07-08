import { shallowMount } from "@vue/test-utils";
import RaceItem from "@/components/RaceItem.vue";

describe("RaceItem.vue", () => {
  it("renders meeting name and race number together", () => {
    const meetingName = "Capalaba";
    const raceNumber = 5;
    const expectedText = `${meetingName.toUpperCase()} R${raceNumber}`;
    const wrapper = shallowMount(RaceItem, {
      props: { meetingName, raceNumber },
    });
    expect(wrapper.text()).toMatch(expectedText);
  });
});
