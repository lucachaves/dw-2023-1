import express from 'express';
import morgan from 'morgan';
import data from './data.js';
import { getPing } from './lib/ping.js';

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

server.get('/hosts', (req, res) => {
  res.json(data.hosts);
});

server.post('/hosts', (req, res) => {
  const host = req.body;

  const newHost = { ...host, id: data.hosts.length + 1 };

  data.hosts.push(newHost);

  res.json(newHost);
});

server.delete('/hosts/:hostId', (req, res) => {
  const id = Number(req.params.hostId);

  const index = data.hosts.findIndex((host) => host.id === id);

  data.hosts.splice(index, 1);
});

server.get('/hosts/:hostId/latencies', async (req, res) => {
  const id = Number(req.params.hostId);

  const host = data.hosts.filter((host) => host.id === id)[0];

  const ping = await getPing(host.address);

  res.json(ping.times.map((time) => ({ value: time })));
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
