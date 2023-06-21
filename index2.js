import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Running server on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  const utcTimestamp = new Date().getTime();
  const gmtDateTime = new Date().toUTCString();

  const obj = { unix: utcTimestamp, utc: gmtDateTime };
  const jsonObj = JSON.stringify(obj);

  res.send(jsonObj);
});

app.get('/api/:date?', (req, res) => {
  const { date } = req.params;

  if (!date) {
    const utcTimestamp = new Date().getTime();
    const gmtDateTime = new Date().toUTCString();
    const obj = { unix: utcTimestamp, utc: gmtDateTime };
    const jsonObj = JSON.stringify(obj);
    res.send(jsonObj);
    return;
  }

  const currentDate = new Date(date);

  if (currentDate.toString() === 'Invalid Date') {
    const errorObj = { error: 'Invalid Date' };
    res.json(errorObj);
  } else {
    const utcTimestamp = currentDate.getTime();
    const gmtDateTime = currentDate.toUTCString();
    const obj = { unix: utcTimestamp, utc: gmtDateTime };
    res.json(obj);
  }
});
