const server = 'http://localhost:3000';

async function create(path, host) {
  const res = await fetch(`${server}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(host),
  });

  return await res.json();
}

async function read(path) {
  const res = await fetch(`${server}${path}`);

  return await res.json();
}

async function readById(path, id) {
  const res = await fetch(`${server}${path}/${id}`);

  return await res.json();
}

async function update(path, host, id) {
  const res = await fetch(`${server}${path}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(host),
  });

  return await res.json();
}

async function remove(path, id) {
  const res = await fetch(`${server}${path}/${id}`, {
    method: 'DELETE',
  });

  return res.status === 204;
}

export default {
  create,
  read,
  readById,
  update,
  remove,
};
