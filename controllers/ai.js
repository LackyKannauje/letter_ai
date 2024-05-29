
const letterResponse = require("../controllers/letter");


async function handlePostRequestResponse(req, res){
    const { topic, format, occupation } = req.body;
  const application = format == "formal" ? "Application" : "Letter";
  const prompt = `write a ${application} for ${topic} for ${occupation}, only give me the ${application} even do not give any other words`;
  const response = await letterResponse(prompt);
  res.send(response);
}

module.exports = {handlePostRequestResponse};