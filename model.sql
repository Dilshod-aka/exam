CREATE DATABASE exam;

CREATE TABLE todos(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT null,
    name VARCHAR(65) not null,
    status boolean,
    created_at timestamp default current_timestamp
);

