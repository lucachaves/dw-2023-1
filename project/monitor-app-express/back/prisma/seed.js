import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seed = {
  hosts: [
    {
      name: 'Google DNS',
      address: '8.8.8.8',
    },
    {
      name: 'Cloudflare DNS',
      address: '1.1.1.1',
    },
  ],
};

async function main() {
  for (const host of seed.hosts) {
    await prisma.host.create({ data: host });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
