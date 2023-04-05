import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const hosts = ['DNS Google', 'DNS Cloudflare'];

const tbody = document.querySelector('tbody');

let rows = '';

for (const host of hosts) {
  rows += `<tr><td>${host}</td></tr>`;
}

tbody.innerHTML = rows;
