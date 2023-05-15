export default {
  hosts: [
    {
      id: 1,
      name: 'Cloudflare DNS',
      address: '1.1.1.1',
    },
    {
      id: 2,
      name: 'Google DNS',
      address: '8.8.8.8',
    },
  ],
  latencies: [
    {
      id: 1,
      hostId: 2,
      value: 90,
    },
    {
      id: 2,
      hostId: 2,
      value: 85,
    },
    {
      id: 3,
      hostId: 2,
      value: 100,
    },
    {
      id: 4,
      hostId: 3,
      value: 80,
    },
    {
      id: 5,
      hostId: 3,
      value: 60,
    },
    {
      id: 6,
      hostId: 3,
      value: 50,
    },
  ],
  users: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
    },
  ],
};
