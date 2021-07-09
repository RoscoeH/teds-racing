const axios = require("axios");
const CONST = require("../core/const");
const {
  CATEGORY,
  CATEGORY_HORSE_ID,
  CATEGORY_HARNESS_ID,
  CATEGORY_GREYHOUND_ID,
} = CONST;

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

async function fetchRaces() {
  const response = await axios.get("/.netlify/functions/fetchRaces");
  console.log(response);
  return response.data;
}

module.exports = { transformResponse, fetchRaces };
