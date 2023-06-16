// const express = require('express');
import express from 'express';
const app = express();
const port = 3000;

// Inicia o servidor
app.listen(port, () => {
  console.log(`Running server on http://localhost:${port}`);
});

// Rotas do seu projeto
app.get('/', (req, res) => {
  res.send('Hi!');
});

app.get('/timestamp', (req, res) => {
  var timestamp = new Date();
  res.send(timestamp);
});

app.get('/name', (req, res) => {
  res.send("rafael");
});

