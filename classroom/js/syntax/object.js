// JSON - JavaScript Object Notation
const host = {
  hostname: 'DSK001LB001-JP',
  ip: '192.168.0.1',
  mask: '255.255.255.0',
};

console.log(host);

// Class Definition
class Host {
  constructor(hostname, ip, mask) {
    this.hostname = hostname;
    this.ip = ip;
    this.mask = mask;
  }
}

const host2 = new Host('DSK001LB002-JP', '192.168.0.2', '255.255.255.0');

console.log(host2);

// Accessing properties
console.log(host['hostname']);
console.log(host.hostname);

host.os = 'Linux Debian';

host.os = 'Linux Ubuntu';
console.log(host.os);

// Property Shorthand
const hostname = 'DSK001LB003-JP';
const ip = '192.168.0.3';
const mask = '255.255.255.0';

// const host3 = { hostname: hostname, ip: ip, mask: mask };
const host3 = { hostname, ip, mask };

// Spread properties
const host4 = { ...host3, os: 'Linux Ubuntu' };

// Property (variable)
const os = 'Linux Ubuntu';
const property = 'os';

const host5 = { ...host3, [property]: os };

// Reference
console.table(host5);

const host6 = host5;

host6.os = 'Linux CentOS';

console.table(host5);

// JSON
const stringHost = JSON.stringify(host5);

console.log(stringHost);

const jsonHost = JSON.parse(stringHost);

console.table(jsonHost);

jsonHost.ip = {
  value: '192.168.0.3',
  version: 4,
};

console.table(jsonHost);

console.table(JSON.stringify(jsonHost, null, 2));

// Loop
for (const key in host) {
  console.log(key, host[key]);
}

for (const value of Object.values(host)) {
  console.log(value);
}

for (const key of Object.keys(host)) {
  console.log(key);
}

for (const [key, value] of Object.entries(host)) {
  console.log(key, value);
}
