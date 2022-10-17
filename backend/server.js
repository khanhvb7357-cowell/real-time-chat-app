const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
  response.send("ok");
});

app.listen(PORT, () => [console.log(`server is running on port ${PORT}`)]);
