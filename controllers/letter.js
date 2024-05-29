const BardAPI = require("../src/ai");
require('dotenv').config()


async function letterResponse(msg) {
  try {
    const apiKey = process.env.apiKey;
    const bard = new BardAPI();
    bard.initializeChat(apiKey);
    const response = await bard.getBardResponse(msg);
    const resp = response.text;
    if (resp.startsWith("[GoogleGenerativeAI Error]") == true)
      return "Please Try Again Later!!";
    return resp;
  } catch (error) {
    return "Please Try Again Later!!";
  }
}

module.exports = letterResponse;
