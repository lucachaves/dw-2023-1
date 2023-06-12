import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import Host from '../models/Host.js';

async function up() {
  const file = resolve('src', 'database', 'seeders.json');

  const content = JSON.parse(readFileSync(file));

  for (const host of content.hosts) {
    await Host.create(host);
  }
}

export default { up };
