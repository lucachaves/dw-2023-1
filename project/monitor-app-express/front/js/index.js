import 'bootstrap';
import { Modal } from 'bootstrap';
import { createLineChart, updateLineChart } from './chart.js';

import API from './api.js';
import Auth from './auth.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import '../css/style.css';

function loadHostsView(hosts) {
  for (const host of hosts) {
    createHostView(host);
  }
}

function createHostView(host) {
  const tbody = document.querySelector('tbody');

  const rowView = `<tr id="host-${host.id}">
    <td>${host.name}</td>
    <td>${host.address}</td>
    <td>
      <i class="fa-solid fa-stopwatch"></i>
      <i class="fa-solid fa-trash-can ms-3"></i>
    </td>
  </tr>`;

  tbody.insertAdjacentHTML('beforeend', rowView);

  const rowTag = document.querySelector(`tr#host-${host.id}`);

  const deleteIcon = rowTag.querySelector('.fa-trash-can');

  deleteIcon.onclick = function () {
    removeHostId = host.id;

    confirmModal.show();
  };

  const stopWatchIcon = rowTag.querySelector('.fa-stopwatch');

  stopWatchIcon.onclick = async function () {
    const latencies = await API.create(`/hosts/${host.id}/reachabilities`);

    const times = latencies.map((latency) => latency.value);

    updateLineChart(times);
  };
}

function removeHostView(id) {
  const rowTag = document.querySelector(`tr#host-${id}`);

  rowTag.remove();

  confirmModal.hide();
}

function loadRemoveHostModalHandler() {
  const confirmBtn = document.querySelector('.modal .btn-primary');

  confirmBtn.onclick = async function () {
    await API.remove('/hosts', removeHostId);

    removeHostView(removeHostId);
  };
}

function loadSubmitHandler() {
  const form = document.querySelector('form');

  form.onsubmit = async function (event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;

    const address = document.querySelector('#address').value;

    const host = { name, address };

    const newHost = await API.create('/hosts', host);

    createHostView(newHost);

    form.reset();

    document.querySelector('#close-offcanvas').click();
  };
}

const confirmModal = new Modal(document.getElementById('confirmModal'));

let removeHostId;

window.signout = Auth.signout;

if (Auth.isAuthenticated()) {
  const hosts = await API.read('/hosts');

  loadHostsView(hosts);

  loadSubmitHandler();

  loadRemoveHostModalHandler();

  createLineChart('chart-line');
}
