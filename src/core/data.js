import axios from "axios";

function mapRaces([, race]) {
  return {
    meetingName: race.meeting_name,
    raceNumber: race.race_number,
    advertisedStart: race.advertised_start.seconds,
  };
}

function compareRaces(a, b) {
  return a.advertisedStart - b.advertisedStart;
}

function transformResponse(response) {
  const races = Object.entries(response.data.data.race_summaries);
  return races.map(mapRaces).sort(compareRaces);
}

export function fetchRaces() {
  return axios
    .get("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10")
    .then(transformResponse);
}
