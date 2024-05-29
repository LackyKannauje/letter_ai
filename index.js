const express = require("express");
const { handlePostRequestResponse } = require("./controllers/ai");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Started!!");
});

app.post("/show", handlePostRequestResponse);

app.listen(PORT, () => console.log("Server started!!"));
