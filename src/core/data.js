import axios from "axios";

import {
  CATEGORY,
  CATEGORY_HORSE_ID,
  CATEGORY_HARNESS_ID,
  CATEGORY_GREYHOUND_ID,
} from "../core/const";

function mapCategory(categoryId) {
  switch (categoryId) {
    case CATEGORY_GREYHOUND_ID:
      return CATEGORY.GREYHOUND;
    case CATEGORY_HARNESS_ID:
      return CATEGORY.HARNESS;
    case CATEGORY_HORSE_ID:
      return CATEGORY.HORSE;
    default:
      return null;
  }
}

function mapRaces([, race]) {
  return {
    meetingName: race.meeting_name,
    raceNumber: race.race_number,
    advertisedStart: race.advertised_start.seconds,
    category: mapCategory(race.category_id),
  };
}

function compareRaces(a, b) {
  return a.advertisedStart - b.advertisedStart;
}

function transformResponse(response) {
  const races = Object.entries(response.data.data.race_summaries);
  return races
    .map(mapRaces)
    .filter(({ category }) => category !== null)
    .sort(compareRaces);
}

export function fetchRaces() {
  return axios
    .get("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=50")
    .then(transformResponse);
}
