import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@iconify/iconify';
import { v4 as uuidv4 } from 'uuid';
import { hosts } from '../data/hosts.js';

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
    rowTag.remove();
  };
}

function loadHostsView() {
  for (const host of hosts) {
    createHostView(host);
  }
}

function loadSubmitHandler() {
  const form = document.querySelector('form');

  form.onsubmit = function (event) {
    event.preventDefault();

    const id = uuidv4();

    const ip = document.querySelector('#ip').value;

    const mask = document.querySelector('#mask').value;

    const version = document.querySelector('input[name=version]:checked').value;

    const host = { id, ip, mask, version };

    createHostView(host);

    form.reset();

    document.querySelector('#close-offcanvas').click();
  };
}

loadHostsView();

loadSubmitHandler();
