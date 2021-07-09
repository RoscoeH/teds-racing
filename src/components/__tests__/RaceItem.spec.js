import { shallowMount } from "@vue/test-utils";
import RaceListItem from "@/components/RaceListItem.vue";

const dummyRace = {
  meetingName: "Capalaba",
  raceNumber: 7,
  secondsRemaining: 10,
};

describe("RaceListItem", () => {
  it("renders meeting name in uppercase", () => {
    const wrapper = shallowMount(RaceListItem, {
      props: dummyRace,
    });

    expect(wrapper.text()).toContain(dummyRace.meetingName.toUpperCase());
  });

  it("renders race number", () => {
    const wrapper = shallowMount(RaceListItem, { props: dummyRace });

    expect(wrapper.text()).toContain(`R${dummyRace.raceNumber}`);
  });

  describe("renders remaining time", () => {
    it("in seconds when seconds are less than a minute", () => {
      const secondsRemaining = 33;

      const wrapper = shallowMount(RaceListItem, {
        props: { ...dummyRace, secondsRemaining },
      });

      expect(wrapper.text()).toContain(`${secondsRemaining}s`);
    });

    it("in minutes and seconds when seconds are more than a minute", () => {
      const secondsRemaining = 90;

      const wrapper = shallowMount(RaceListItem, {
        props: { ...dummyRace, secondsRemaining },
      });

      expect(wrapper.text()).toContain("1m 30s");
    });

    it("in negative seconds when seconds are between -60 and 0", () => {
      const secondsRemaining = -33;

      const wrapper = shallowMount(RaceListItem, {
        props: { ...dummyRace, secondsRemaining },
      });

      expect(wrapper.text()).toContain(`${secondsRemaining}s`);
    });

    it("in negative minutes and seconds when seconds are less than -60", () => {
      const secondsRemaining = -90;

      const wrapper = shallowMount(RaceListItem, {
        props: { ...dummyRace, secondsRemaining },
      });

      expect(wrapper.text()).toContain("-1m 30s");
    });

    it("in default color when secondsRemaining is 5 minutes or more.", () => {
      const secondsRemaining = 5 * 60;

      const wrapper = shallowMount(RaceListItem, {
        props: { ...dummyRace, secondsRemaining },
      });
      const time = wrapper.find(".time-remaining");

      expect(time.attributes().class).not.toContain("time-color");
    });

    it("in yellow when secondsRemaining is less than 5 minutes.", () => {
      const secondsRemaining = 4 * 60 + 30;

      const wrapper = shallowMount(RaceListItem, {
        props: { ...dummyRace, secondsRemaining },
      });
      const time = wrapper.find(".time-remaining");

      expect(time.attributes().class).toContain("time-color-yellow");
    });

    it("in orange when secondsRemaining is less than 3 minutes.", () => {
      const secondsRemaining = 2 * 60 + 30;

      const wrapper = shallowMount(RaceListItem, {
        props: { ...dummyRace, secondsRemaining },
      });
      const time = wrapper.find(".time-remaining");

      expect(time.attributes().class).toContain("time-color-orange");
    });

    it("in red when secondsRemaining is less than 1 minute.", () => {
      const secondsRemaining = 30;

      const wrapper = shallowMount(RaceListItem, {
        props: { ...dummyRace, secondsRemaining },
      });
      const time = wrapper.find(".time-remaining");

      expect(time.attributes().class).toContain("time-color-red");
    });

    it("in pink when secondsRemaining is negative.", () => {
      const secondsRemaining = -30;

      const wrapper = shallowMount(RaceListItem, {
        props: { ...dummyRace, secondsRemaining },
      });
      const time = wrapper.find(".time-remaining");

      expect(time.attributes().class).toContain("time-color-pink");
    });
  });
});
