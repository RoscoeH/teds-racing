const axios = require("axios");
const CONST = require("../src/core/const");
const data = require("../src/core/data");
const { API_ENDPOINT } = CONST;
const { transformResponse } = data;

exports.handler = async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
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
