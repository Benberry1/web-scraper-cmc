const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const PORT = 5001;

const getPriceFeed = async () => {
  const URL = "https://coinmarketcap.com/";
  const { data } = await axios({
    method: "GET",
    url: URL,
  });

  const $ = cheerio.load(data);
  const elemSelector =
    "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div > div.h7vnx2-1.bFzXgL > table > tbody > tr";

  const keys = [
    "rank",
    "name",
    "price",
    "1h",
    "24h",
    "7d",
    "marketCap",
    "volume",
    "circulatingSupply",
    "logo",
    "priceGraph",
  ];

  const coinArray = [];

  $(elemSelector).each((parentInd, parentElem) => {
    let keyIndex = 0;
    const coinObj = {};
    if (parentInd <= 9) {
      $(parentElem)
        .children()
        .each((childInd, childElem) => {
          let tdValue = $(childElem).text();
          const logo = $(".coin-logo", $(childElem).html()).attr("src");

          if (keyIndex === 1) {
            tdValue = $("p:first-child", $(childElem).html()).text();
          }

          if (keyIndex === 6) {
            tdValue = $("span:nth-child(2)", $(childElem).html()).text();
          }

          if (keyIndex === 7) {
            tdValue = $("a:first-child", $(childElem).html()).text();
          }

          if (tdValue) {
            coinObj[keys[keyIndex]] = tdValue;
            keyIndex++;
          }

          if (logo) {
            coinObj[keys[9]] = logo;
          }
        });
      coinArray.push(coinObj);
    }
  });
  return coinArray;
};

app.get("/api/crypto-price-feed", async (req, res) => {
  try {
    const priceFeed = await getPriceFeed();
    res.status(200).json({
      data: priceFeed,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
