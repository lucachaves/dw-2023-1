import express from 'express';
import morgan from 'morgan';

const server = express();

server.use(morgan('tiny'));

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.get('/hello/en', (req, res) => {
  const name = req.query.name;

  res.json({
    message: `Hello, ${name}!`,
  });
});

server.get('/hello/pt/:name', (req, res) => {
  const name = req.params.name;

  res.json({
    message: `Olá, ${name}!`,
  });
});

server.post('/hello/es', (req, res) => {
  const name = req.body.name;

  res.json({
    message: `¡Hola ${name}!`,
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
