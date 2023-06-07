CREATE DATABASE inventario_db;

USE inventario_db;

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
  name VARCHAR(20) NOT NULL,
  address VARCHAR(20) NOT NULL
);

INSERT INTO
  maquinas (name, address)
VALUES
  ('pc-sala-adm', '192.168.0.1'),
  ('pc-sala-aula', '192.168.0.2');

CREATE TABLE disponibilidades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  status VARCHAR(20) NOT NULL,
  criado_em DATETIME NOT NULL DEFAULT NOW(),
  maquina_id INT NOT NULL REFERENCES maquinas (id)
);

INSERT INTO
  disponibilidades (status, maquina_id)
VALUES
  ('up', 1),
  ('down', 2);
