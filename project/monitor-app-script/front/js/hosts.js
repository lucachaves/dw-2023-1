const server = 'http://localhost:3000';

async function create(host) {
  const res = await fetch(`${server}/hosts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(host),
  });

  return await res.json();
}

async function read() {
  const res = await fetch(`${server}/hosts`);

  return await res.json();
}

async function readById(id) {
  const res = await fetch(`${server}/hosts/${id}`);

  return await res.json();
}

async function update(host, id) {
  const res = await fetch(`${server}/hosts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(host),
  });

  return await res.json();
}

async function remove(id) {
  const res = await fetch(`${server}/hosts/${id}`, {
    method: 'DELETE',
  });

  return await res.json();
}

export default {
  create,
  read,
  readById,
  update,
  remove,
};
