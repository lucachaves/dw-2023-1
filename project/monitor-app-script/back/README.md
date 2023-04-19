# Intruções para carrerar o json-server

1. Instalar o json-server:

```bash
$ mkdir back
$ cd back
$ npm install json-server
```

2. Criar arquivo db.json:

```json
{
  "hosts": [
    {
      "id": 1,
      "name": "Google DNS",
      "address": "8.8.8.8"
    },
    {
      "id": 2,
      "name": "Cloudflare DNS",
      "address": "1.1.1.1"
    }
  ]
}
```

3. Testar o json-server e acessar o endereço http://localhost:3000/hosts:

```bash
$ npx json-server --watch db.json
```

4. Adicionar o script `start` no package.json e executar o json-server via comando `npm start`:

```json
{
  "scripts": {
    "start": "json-server --watch db.json"
  },
  ...
}
```

5. Usar a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) para testar as requisições HTTP:

```http
@jsonServer = http://localhost:3000
@createdHostId = {{createHost.response.body.id}}

### Create a new Host
# @name createHost
POST {{jsonServer}}/hosts
Content-Type: application/json

{
  "name": "ifpb",
  "address": "www.ifpb.edu.br"
}

### Read all Hosts
GET {{jsonServer}}/hosts

### Read a Host by id
GET {{jsonServer}}/hosts/{{createdHostId}}

### Update a Host
PUT {{jsonServer}}/hosts/{{createdHostId}}
Content-Type: application/json

{
  "name": "IFPB",
  "address": "www.ifpb.edu.br"
}

### Delete a Host
DELETE {{jsonServer}}/hosts/{{createdHostId}}
```
