# Intruções para carrerar o json-server

1. Instalar o json-server:

```bash
$ mkdir back-end
$ cd back-end
$ npm install json-server
```

2. Criar arquivo db.json:

```json
{
  "hosts": [
    {
      "id": 1,
      "ip": "192.168.0.1",
      "mask": "255.255.255.0",
      "version": "v4"
    },
    {
      "id": 2,
      "ip": "192.168.0.2",
      "mask": "255.255.255.0",
      "version": "v4"
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
