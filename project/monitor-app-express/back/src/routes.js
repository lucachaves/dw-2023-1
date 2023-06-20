import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { getPing } from './lib/ping.js';
import { isAuthenticated } from './middleware/auth.js';

import Host from './models/Host.js';
import User from './models/User.js';
import Reachability from './models/Reachability.js';

class HTTPError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

const router = Router();

router.post('/users', async (req, res) => {
  const user = req.body;

  delete user.confirmationPassword;

  const newUser = await User.create(user);

  res.status(201).json(newUser);
});

router.get('/users', isAuthenticated, async (req, res) => {
  const users = await User.readAll();

  res.json(users);
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    const { id: userId, password: hash } = await User.readByEmail(email);

    const match = await bcrypt.compare(password, hash);

    if (match) {
      const token = jwt.sign(
        { userId },
        process.env.SECRET,
        { expiresIn: 3600 } // 1h
      );

      res.json({ auth: true, token });
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    res.status(401).json({ error: 'User not found' });
  }
});

router.post('/hosts', isAuthenticated, async (req, res) => {
  const host = req.body;

  const newHost = await Host.create(host);

  if (newHost) {
    res.json(newHost);
  } else {
    throw new HTTPError('Invalid data to create host', 400);
  }
});

router.get('/hosts', isAuthenticated, async (req, res) => {
  const hosts = await Host.readAll();

  res.json(hosts);
});

router.get('/hosts/:id', isAuthenticated, async (req, res) => {
  const id = Number(req.params.id);

  const host = await Host.read(id);

  if (id && host) {
    res.json(host);
  } else {
    throw new HTTPError('Invalid id to read host', 400);
  }
});

router.put('/hosts/:id', isAuthenticated, async (req, res) => {
  const id = Number(req.params.id);

  const host = req.body;

  if (id && host) {
    const newHost = await Host.update(host, id);

    res.json(newHost);
  } else {
    throw new HTTPError('Invalid data to update host', 400);
  }
});

router.delete('/hosts/:id', isAuthenticated, async (req, res) => {
  const id = Number(req.params.id);

  if (id && (await Host.remove(id))) {
    res.sendStatus(204);
  } else {
    throw new HTTPError('Id is required to remove host', 400);
  }
});

router.post('/hosts/:id/latencies', isAuthenticated, async (req, res) => {
  const id = Number(req.params.id);

  const host = await Host.read(id);

  const ping = await getPing(host.address);

  const times = ping.times.map((time) => ({ value: time }));

  const reachability = {
    transmitted: 3,
    received: ping.times.length,
    hostId: id,
  };

  await Reachability.create(reachability);

  res.json(times);
});

router.get('/hosts/:id/latencies', isAuthenticated, async (req, res) => {
  const id = Number(req.params.id);

  const latencies = await Reachability.readByHost(id);

  if (id && latencies) {
    res.json(latencies);
  } else {
    throw new HTTPError('Invalid id to read host', 400);
  }
});

router.get('/latencies', isAuthenticated, async (req, res) => {
  const latencies = await Reachability.readAll();

  res.json(latencies);
});

// 404 handler
router.use((req, res, next) => {
  res.status(404).json({ message: 'Content not found!' });
});

// Error handler
router.use((err, req, res, next) => {
  // console.error(err.stack);
  if (err instanceof HTTPError) {
    res.status(err.code).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'Something broke!' });
  }
});

export default router;
