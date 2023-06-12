import Database from '../database/database.js';

async function create(host) {
  const db = await Database.connect();

  const { name, address } = host;

  const sql = `
    INSERT INTO
      hosts (name, address)
    VALUES
      (?, ?)
  `;

  const { lastID } = await db.run(sql, [name, address]);

  return read(lastID);
}

async function readAll() {
  const db = await Database.connect();

  const sql = `
    SELECT
      id, name, address
    FROM
      hosts
  `;

  const hosts = await db.all(sql);

  return hosts;
}

async function read(id) {
  const db = await Database.connect();

  const sql = `
    SELECT
      id, name, address
    FROM
      hosts
    WHERE
      id = ?
  `;

  const hosts = await db.get(sql, [id]);

  return hosts;
}

async function update(host, id) {
  const db = await Database.connect();

  const { name, address } = host;

  const sql = `
    UPDATE
      hosts
    SET
      name = ?, address = ?
    WHERE
      id = ?
  `;

  const { changes } = await db.run(sql, [name, address, id]);

  if (changes === 1) {
    return read(id);
  } else {
    return false;
  }
}

async function remove(id) {
  const db = await Database.connect();

  const sql = `
    DELETE FROM
      hosts
    WHERE
      id = ?
  `;

  const { changes } = await db.run(sql, [id]);

  return changes === 1;
}

export default {
  create,
  readAll,
  read,
  update,
  remove,
};
