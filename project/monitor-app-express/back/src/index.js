import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import { cors } from './middleware/cors.js';
import router from './routes.js';

const server = express();

server.use(cors);

server.use(morgan('tiny'));

server.use(express.json());

server.use(router);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
