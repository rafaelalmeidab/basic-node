// const express = require('express');
import express from 'express';
const app = express();
const port = 3000;

// You should provide your own project, not the example URL.
// Waiting:A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number) - OK!
// Waiting:A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT  - OK!
// Waiting:A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" } - OK!
// Waiting:Your project can handle dates that can be successfully parsed by new Date(date_string)
// Waiting:If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" } - OK!
// Waiting:An empty date parameter should return the current time in a JSON object with a unix key - OK!
// Waiting:An empty date parameter should return the current time in a JSON object with a utc key - OK!

app.listen(port, () => {
  console.log(`Running server on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  const utcTimestamp = new Date().getTime();
  const gmtDateTime = new Date().toUTCString();

  const obj = { unix: utcTimestamp, utc: gmtDateTime};
  const jsonObj = (obj);

  res.json(jsonObj);
});

app.get('/api/:date?', (req, res) => {

  var dateParam   = req.url.split('/').pop();
  var currentDate = new Date(dateParam);
  
  if(Date.parse(currentDate.toString()) == "Invalid Date"){
    dateParam = ({ error: currentDate.toString() });
  }
  else{
    if(currentDate.toUTCString() != 'Invalid Date'){
      dateParam = ({ unix: (currentDate.getTime()), utc: (currentDate.toUTCString()) });
    }
    else{
      dateParam = Number(dateParam);
      currentDate = new Date(dateParam);
      dateParam = ({ unix: (currentDate.getTime()), utc: (currentDate.toUTCString()) });
    }
  }

  res.json(dateParam);
});