const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
