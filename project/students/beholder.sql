CREATE DATABASE beholder_db;

USE beholder_db;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(60) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(100) NOT NULL
);

INSERT INTO
  usuarios (nome, email, senha)
VALUES
  ('admin', 'admin@email.com', '$2a$12$CZiRXzjeW8NtA8eJI5/xjOXDjWDbsG8umzQfGctqxxUfRqjYUYnZC');

CREATE TABLE maquinas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hostname VARCHAR(20) NOT NULL,
  username VARCHAR(60) NOT NULL,
  password VARCHAR(200) NOT NULL
);

INSERT INTO
  maquinas (hostname, username, password)
VALUES
  ('http-server', 'admin', '$2a$12$CZiRXzjeW8NtA8eJI5/xjOXDjWDbsG8umzQfGctqxxUfRqjYUYnZC');


CREATE TABLE metricas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  origem VARCHAR(50) NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  valor VARCHAR(50) NOT NULL,
  criado_em DATETIME NOT NULL DEFAULT NOW(),
  maquina_id INT NOT NULL REFERENCES maquinas (id)
);

INSERT INTO
  metricas (origem, tipo, valor, maquina_id)
VALUES
  ('cpu', 'uso', '10', 1),
  ('cpu', 'temperatura', '95', 1),
  ('memoria', 'uso', '50', 1),
  ('host', 'uptime', '19:57:57', 1),
  ('network', 'disponibilidade', 'up', 1);




