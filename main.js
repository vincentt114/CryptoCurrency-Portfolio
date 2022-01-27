import fetch from "node-fetch";

const getData = () => {
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10000&page=1&sparkline=false', 
     {method: 'GET', headers: { Accept: 'application/json' }}
    )
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}

let data = getData();