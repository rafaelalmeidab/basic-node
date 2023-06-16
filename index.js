import express from 'express';
const app = express();
const port = 3000;

// Rotas do seu projeto
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});