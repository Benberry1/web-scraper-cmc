# Coin Market Cap Web Scraper

A fun project that scrapes the top 10 cryptocurrency data from [Coin Market Cap](https://coinmarketcap.com/). Data is then returned via an endpoint get request. During this project I learnt how to implement Cheerio to scrap web data using their documentation and google. Along with using axios as a way to fetch from a URL within Node. Previous I have used node-fetch dependency to do the same task. Node-fetch allows the front end fetch request to also be done in the backend.

## Returned Data

```json
{
  "data": [
    {
      "rank": "1",
      "name": "Bitcoin",
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      "price": "$21,629.90",
      "1h": "0.01%",
      "24h": "0.42%",
      "7d": "8.97%",
      "marketCap": "$414,171,814,988",
      "volume": "$34,484,766,210",
      "circulatingSupply": "19,148,118 BTC"
    },
    {
      "rank": "2",
      "name": "Ethereum",
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
      "price": "$1,747.06",
      "1h": "0.08%",
      "24h": "1.86%",
      "7d": "11.45%",
      "marketCap": "$213,721,092,423",
      "volume": "$12,429,235,547",
      "circulatingSupply": "122,331,659 ETH"
    },
    {
      "rank": "3",
      "name": "Tether",
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
      "price": "$1.00",
      "1h": "0.00%",
      "24h": "0.00%",
      "7d": "0.02%",
      "marketCap": "$67,670,620,812",
      "volume": "$47,272,862,182",
      "circulatingSupply": "67,652,203,603 USDT"
    },
    {
      "rank": "4",
      "name": "USD Coin",
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
      "price": "$1",
      "1h": "0.02%",
      "24h": "0.00%",
      "7d": "0.00%",
      "marketCap": "$51,601,701,760",
      "volume": "$5,258,953,564",
      "circulatingSupply": "51,604,205,337 USDC"
    },
    {
      "rank": "5",
      "name": "BNB",
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      "price": "$293.50",
      "1h": "0.09%",
      "24h": "1.39%",
      "7d": "5.80%",
      "marketCap": "$47,353,137,649",
      "volume": "$702,727,401",
      "circulatingSupply": "161,337,261 BNB"
    },
    {
      "rank": "6",
      "name": "Binance USD",
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png",
      "price": "$0.9998",
      "1h": "0.02%",
      "24h": "0.02%",
      "7d": "0.02%",
      "marketCap": "$19,999,044,104",
      "volume": "$8,295,541,912",
      "circulatingSupply": "20,003,342,405 BUSD"
    },
    {
      "rank": "7",
      "name": "XRP",
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
      "price": "$0.3537",
      "1h": "0.40%",
      "24h": "1.59%",
      "7d": "7.09%",
      "marketCap": "$17,622,050,538",
      "volume": "$651,196,841",
      "circulatingSupply": "49,826,021,773 XRP"
    },
    {
      "rank": "8",
      "name": "Cardano",
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
      "price": "$0.5052",
      "1h": "0.32%",
      "24h": "1.75%",
      "7d": "1.37%",
      "marketCap": "$17,268,346,153",
      "volume": "$699,818,216",
      "circulatingSupply": "34,182,044,153 ADA"
    },
    {
      "rank": "9",
      "name": "Solana",
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
      "price": "$34.74",
      "1h": "0.21%",
      "24h": "1.52%",
      "7d": "8.89%",
      "marketCap": "$12,272,072,067",
      "volume": "$754,586,082",
      "circulatingSupply": "353,283,628 SOL"
    },
    {
      "rank": "10",
      "name": "Polkadot",
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
      "price": "$7.64",
      "1h": "0.30%",
      "24h": "2.13%",
      "7d": "4.52%",
      "marketCap": "$8,526,582,989",
      "volume": "$273,505,783",
      "circulatingSupply": "1,116,007,262 DOT"
    }
  ]
}
```

## Dependencies

- [Express](https://www.npmjs.com/package/express)
- [Axios](https://www.npmjs.com/package/axios)
- [Cheerio](https://www.npmjs.com/package/cheerio)

### Dev Specific

- [Nodemon](https://www.npmjs.com/package/nodemon)

## How to use

1. Clone or download repository
2. Using your terminal venture into the projects folder.
   ```
   cd web-scraper-cmc
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Start the server
   ```
   npm start
   ```
5. In your browser type:

   localhost:5001/api/crypto-price-feed

I use JSON formatter to see json data easier in your browser:

[JSON Formatter Chrome Extension](https://chrome.google.com/webstore/detail/json-formatter/mhimpmpmffogbmmkmajibklelopddmjf)
