import { Router } from 'express';
import data from './data.js';
import { getPing } from './lib/ping.js';

const router = Router();

router.get('/hosts', (req, res) => {
  res.json(data.hosts);
});

router.post('/hosts', (req, res) => {
  const host = req.body;

  const newHost = { ...host, id: data.hosts.length + 1 };

  data.hosts.push(newHost);

  res.json(newHost);
});

router.delete('/hosts/:hostId', (req, res) => {
  const id = Number(req.params.hostId);

  const index = data.hosts.findIndex((host) => host.id === id);

  data.hosts.splice(index, 1);

  res.sendStatus(204);
});

router.get('/hosts/:hostId/latencies', async (req, res) => {
  const id = Number(req.params.hostId);

  const host = data.hosts.filter((host) => host.id === id)[0];

  const ping = await getPing(host.address);

  res.json(ping.times.map((time) => ({ value: time })));
});

export default router;
