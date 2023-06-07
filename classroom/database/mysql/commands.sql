CREATE DATABASE IF NOT EXISTS monitor_db;

USE monitor_db;

CREATE TABLE hosts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
);

INSERT INTO
  hosts (name, address)
VALUES
  ('Cloudflare DNS', '1.1.1.1'),
  ('Google DNS', '8.8.8.8'),
  ('Google Search', 'www.google.com'),
  ('IFPB', 'www.ifpb.edu.br');

CREATE TABLE latencies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  transmitted INT NOT NULL,
  received INT NOT NULL,
  create_at datetime DEFAULT NOW(),
  host_id INT REFERENCES hosts (id)
);

INSERT INTO
  latencies (transmitted, received, host_id)
VALUES
  (3, 3, 1),
  (3, 2, 1);

SELECT
  *
FROM
  hosts JOIN latencies
ON
  latencies.host_id = hosts.id;

-- Quantos pacotes foram recebidos?
SELECT
  SUM(latencies.received) AS received
FROM
  hosts JOIN latencies
ON
  latencies.host_id = hosts.id;

-- Qual é a média de pacotes perdidos?
SELECT
  (SUM(latencies.transmitted) - SUM(latencies.received)) / SUM(latencies.transmitted) AS lost_avg
FROM
  hosts JOIN latencies
ON
  latencies.host_id = hosts.id;

-- Qual é a porcentagem de pacotes recebidos do IFPB?
SELECT
  SUM(latencies.received) * 100 / SUM(latencies.transmitted) AS lost_percentage
FROM
  hosts JOIN latencies
ON
  latencies.host_id = hosts.id;

-- Qual é a porcentagem de pacotes perdidos do IFPB no dia 16/02/2018 entre 09:00 até 18:00?
SELECT
  (SUM(latencies.transmitted) - SUM(latencies.received)) * 100 / SUM(latencies.transmitted) AS lost_percentage
FROM
  hosts JOIN latencies
ON
  latencies.host_id = hosts.id
WHERE
  latencies.create_at BETWEEN '2018-02-16 09:00:00' AND '2018-02-16 18:00:00';
