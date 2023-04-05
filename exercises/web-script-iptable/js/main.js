import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const hosts = [
  {
    ip: '192.168.0.1',
    mask: '255.255.255.0',
    version: 'v4',
  },
  {
    ip: '192.168.0.2',
    mask: '255.255.255.0',
    version: 'v4',
  },
  {
    ip: '192.168.0.3',
    mask: '255.255.255.0',
    version: 'v4',
  },
];

const tbody = document.querySelector('tbody');

let rows = '';

for (const host of hosts) {
  rows += `<tr>
    <td>${host.ip}</td>
    <td>${host.mask}</td>
    <td>${host.version}</td>
  </tr>`;
}

tbody.innerHTML = rows;
