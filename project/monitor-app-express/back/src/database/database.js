import { resolve } from 'node:path';
import { Database } from 'sqlite-async';

const dbFile = resolve(process.cwd(), 'src', 'database', 'db.sqlite');

async function connect() {
  return await Database.open(dbFile);
}

export default { connect };
