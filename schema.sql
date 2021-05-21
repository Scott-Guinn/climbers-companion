DROP DATABASE IF EXISTS climb;

CREATE DATABASE climb;

\c climb;

DROP TABLE IF EXISTS destinations CASCADE;
CREATE TABLE destinations (
  id SERIAL PRIMARY KEY,
  name varchar(200),
  city varchar(50),
  state varchar(20),
  country varchar(20),
  mapUrl varchar(200),
);

CREATE TABLE emergencyResponse (
  id SERIAL PRIMARY KEY,
  name varchar(200),
  phone smallint,
  FOREIGN KEY(destination_id)
     REFERENCES destinations(id)
     ON DELETE CASCADE
);

CREATE TABLE campgrounds (
  id SERIAL PRIMARY KEY,
  name varchar(200),
  phone smallint,
  address varchar(200),
  price numeric(2),
  FOREIGN KEY(destination_id)
     REFERENCES destinations(id)
     ON DELETE CASCADE
);

CREATE TABLE gearShops (
  id SERIAL PRIMARY KEY,
  name varchar(200),
  phone smallint,
  address varchar(200),
  FOREIGN KEY(destination_id)
     REFERENCES destinations(id)
     ON DELETE CASCADE
);