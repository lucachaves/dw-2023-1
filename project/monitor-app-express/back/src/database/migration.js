import Database from './database.js';

async function up() {
  const db = await Database.connect();

  const hostsSql = `
    CREATE TABLE hosts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(50) NOT NULL,
      address VARCHAR(50) NOT NULL
    )
  `;

  await db.run(hostsSql);

  const latenciesSql = `
    CREATE TABLE latencies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      transmitted INTEGER NOT NULL,
      received INTEGER NOT NULL,
      create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      host_id INTEGER REFERENCES hosts (id) ON DELETE CASCADE
    )
  `;

  await db.run(latenciesSql);
}

export default { up };
