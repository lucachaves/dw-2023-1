import express from 'express';
import morgan from 'morgan';
import router from './routes.js';

const server = express();

// cors
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

server.use(morgan('tiny'));

server.use(express.json());

server.use(router);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
