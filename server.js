'use strict'


/* this is librarys*/
////////////////////////////////////
/*express  */
const express = require('express');

/* who can touch my server */
const cors = require('cors');

/* dotenv */
require('dotenv').config();
/////////////////////////////////////

/*for get the port number if it not there it will take(3196) */
const PORT = process.env.PORT || 3196;

const app = express();

/*that mean any one can use my server(its will be open to every body) */
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('it is work berfectlly')
});
/* http://localhost:3642/location?data=Lunnwood  */
app.get('/location', (req, res) => {
  const city = req.query.data;
  const locationData = require('./data/ location.json');
  const locaData = new Location(city, locationData);
  res.send(locaData);
});

function Location(city, locationData) {
  this.search_query = city;
  this.formatted_query = locationData[0].display_name;
  this.latitude = locationData[0].lat;
  this.longitude = locationData[0].lon;
}

app.get('/weather', (req, res) => {
  const weatherData = require('./data/weather.json');
  // const nWeather = weatherData.data;
  var notArrResult=[];
  console.log(weatherData.data)
  weatherData.data.forEach(element => {
    let notResult= new Weather( element);
    notArrResult.push(notResult);
    console.log(notResult);
  });
  res.send(notArrResult);
});


function Weather(weatherData) {
  this.forecast = weatherData.weather.description;
  this.time = new Date(weatherData.datetime).toDateString();

}
app.get('*', (req, res) => {
  res.status(404).send('Whoops(404)-something went wrong')
});

app.get((error, req, res) => {
  res.status(500).send('Sorry, something went wrong')
});


////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
