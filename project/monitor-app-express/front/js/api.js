import Auth from './auth.js';

const server = '/api';

async function create(path, host, auth = true) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(host),
  };

  if (auth) {
    config.headers.Authorization = `Bearer ${Auth.getToken()}`;
  }

  const res = await fetch(`${server}${path}`, config);

  return await res.json();
}

async function read(path) {
  const config = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${Auth.getToken()}`,
    },
  };

  const res = await fetch(`${server}${path}`, config);

  return await res.json();
}

async function readById(path, id) {
  const config = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${Auth.getToken()}`,
    },
  };

  const res = await fetch(`${server}${path}/${id}`, config);

  return await res.json();
}

async function update(path, host, id) {
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Auth.getToken()}`,
    },
    body: JSON.stringify(host),
  };

  const res = await fetch(`${server}${path}/${id}`, config);

  return await res.json();
}

async function remove(path, id) {
  const config = {
    method: 'DELETE',
    Authorization: `Bearer ${Auth.getToken()}`,
  };

  const res = await fetch(`${server}${path}/${id}`, config);

  return res.status === 204;
}

export default {
  create,
  read,
  readById,
  update,
  remove,
};
