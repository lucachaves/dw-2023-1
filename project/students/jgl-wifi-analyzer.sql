CREATE DATABASE wifi_analyzer_db;

USE wifi_analyzer_db;

CREATE TABLE usuarios (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email varchar(100) NOT NULL,
  password varchar(100) NOT NULL
);

CREATE TABLE enderecos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  tipo_residencia varchar(100) NOT NULL,
  rua varchar(100) NOT NULL,
  numero INT NOT NULL,
  cidade varchar(100) NOT NULL,
  estado varchar(100) NOT NULL,
  cep INT NOT NULL,
  usuario_id INT NOT NULL REFERENCES usuarios (id)
)

CREATE TABLE wifis (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome varchar(100) NOT NULL,
  banda varchar(5) NOT NULL
);

CREATE TABLE metricas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(50) NOT NULL,
  valor VARCHAR(50) NOT NULL,
  criado_em DATETIME NOT NULL DEFAULT NOW(),
  wifi_id INT NOT NULL REFERENCES wifis (id)
);
