import util from 'node:util';
import { exec } from 'node:child_process';

const execAsync = util.promisify(exec);

export async function ping(host) {
  const { stdout } = await execAsync(`ping -c 1 ${host}`);

  return stdout;
}
