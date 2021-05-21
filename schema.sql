DROP DATABASE IF EXISTS climb;

CREATE DATABASE climb;

\c climb;

DROP TABLE IF EXISTS destinations CASCADE;
CREATE TABLE destinations(
  id SERIAL PRIMARY KEY,
  name varchar(200),
  city varchar(50),
  state varchar(20),
  country varchar(20),
  mapurl varchar(200)
);

CREATE TABLE emergencyresponse(
  id SERIAL PRIMARY KEY,
  name varchar(200),
  phone smallint,
  CONSTRAINT fk_destination_id
     FOREIGN KEY(id)
        REFERENCES destinations(id)
        ON DELETE CASCADE
);

CREATE TABLE campgrounds(
  id SERIAL PRIMARY KEY,
  name varchar(200),
  phone smallint,
  address varchar(200),
  price numeric(2),
  CONSTRAINT fk_destination_id
     FOREIGN KEY(id)
        REFERENCES destinations(id)
        ON DELETE CASCADE
);

CREATE TABLE gearshops(
  id SERIAL PRIMARY KEY,
  name varchar(200),
  phone smallint,
  address varchar(200),
  CONSTRAINT fk_destination_id
     FOREIGN KEY(id)
        REFERENCES destinations(id)
        ON DELETE CASCADE
);
