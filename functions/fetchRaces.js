const axios = require("axios");
const data = require("../src/core/data");
const { transformResponse } = data;

exports.handler = async () => {
  try {
    const response = await axios.get(
      "https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=50"
    );
    const payload = transformResponse(response);

    return {
      statusCode: 200,
      body: JSON.stringify(payload),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: "Error fetching latest races",
    };
  }
};
