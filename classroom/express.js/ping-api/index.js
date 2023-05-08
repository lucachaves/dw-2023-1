import express from 'express';
import morgan from 'morgan';
import { ping } from './ping.js';

const server = express();

server.use(morgan('tiny'));

// /ping?host=8.8.8.8
server.get('/ping', async (req, res) => {
  const host = req.query.host;

  res.json({
    ping: await ping(host),
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
