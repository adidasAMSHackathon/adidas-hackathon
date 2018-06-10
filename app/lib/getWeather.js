const fetch = require("node-fetch");

module.exports = () =>
  fetch(
    "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22amsterdam%22)%20and%20u%3D%22c%22&format=json&env=store:%2F%2Fdatatables.org%2Falltableswithkeys"
  )
    .then(response => response.json())
    .then(data => parseInt(data.query.results.channel.item.condition.temp, 10))
    .catch(error => {
      if (error) console.error(error);
      process.exit(1);
    });
