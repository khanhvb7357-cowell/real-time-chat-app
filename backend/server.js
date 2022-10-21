const express = require("express");
const app = express();
const dotenv = require("dotenv");

const databaseConnect = require("./config/database");

dotenv.config({
  path: "backend/config/config.env",
});
const PORT = process.env.PORT;

databaseConnect();

app.get("/", (request, response) => {
  response.send("ok");
});

app.listen(PORT, () => [console.log(`server is running on port ${PORT}`)]);
