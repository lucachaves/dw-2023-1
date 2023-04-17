import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@iconify/iconify';

function createHostView(host) {
  const tbody = document.querySelector('tbody');

  const rowView = `<tr id="host-${host.id}">
    <td>${host.ip}</td>
    <td>${host.mask}</td>
    <td>${host.version}</td>
    <td>
      <div class="remove-host-icon">
        <span class="iconify" data-icon="mdi:file-document-delete-outline"></span>
      </div>
    </td>
  </tr>`;

  tbody.insertAdjacentHTML('beforeend', rowView);

  const rowTag = document.querySelector(`tr#host-${host.id}`);

  const deleteIcon = rowTag.querySelector('.remove-host-icon');

  deleteIcon.onclick = function () {
    fetch(`http://localhost:3000/hosts/${host.id}`, {
      method: 'DELETE',
    });

    rowTag.remove();
  };
}

function loadHostsView(hosts) {
  for (const host of hosts) {
    createHostView(host);
  }
}

function loadSubmitHandler() {
  const form = document.querySelector('form');

  form.onsubmit = async function (event) {
    event.preventDefault();

    const ip = document.querySelector('#ip').value;

    const mask = document.querySelector('#mask').value;

    const version = document.querySelector('input[name=version]:checked').value;

    const host = { ip, mask, version };

    const res = await fetch('http://localhost:3000/hosts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(host),
    });

    const newHost = await res.json();

    createHostView(newHost);

    form.reset();

    document.querySelector('#close-offcanvas').click();
  };
}

const res = await fetch('http://localhost:3000/hosts');

const hosts = await res.json();

loadHostsView(hosts);

loadSubmitHandler();
