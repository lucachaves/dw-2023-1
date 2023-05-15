import util from 'node:util';
import ping from 'ping';
import { exec } from 'node:child_process';

const execAsync = util.promisify(exec);

export async function getPing(host) {
  // const { stdout } = await execAsync(`ping -c 1 ${host}`);

  // return stdout;

  let res = await ping.promise.probe(host, { min_reply: 3 });

  return res;
}
