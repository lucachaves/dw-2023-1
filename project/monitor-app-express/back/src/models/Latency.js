import Database from '../database/database.js';

async function create(latency) {
  const db = await Database.connect();

  const { transmitted, received, host_id } = latency;

  const sql = `
    INSERT INTO
      latencies (transmitted, received, host_id)
    VALUES
      (?, ?, ?)
  `;

  const { lastID } = await db.run(sql, [transmitted, received, host_id]);

  return read(lastID);
}

async function readAll() {
  const db = await Database.connect();

  const sql = `
    SELECT
      id, transmitted, received, create_at, host_id
    FROM
      latencies
  `;

  const latencies = await db.all(sql);

  return latencies;
}

async function read(id) {
  const db = await Database.connect();

  const sql = `
    SELECT
      id, transmitted, received, create_at, host_id
    FROM
      latencies
    WHERE
      id = ?
  `;

  const latencies = await db.get(sql, [id]);

  return latencies;
}

async function readByHost(hostId) {
  const db = await Database.connect();

  const sql = `
    SELECT
      id, transmitted, received, create_at
    FROM
      latencies
    WHERE
      host_id = ?
  `;

  const latencies = await db.all(sql, [hostId]);

  return latencies;
}

export default {
  create,
  readAll,
  read,
  readByHost,
};
