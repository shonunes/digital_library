\c postgres;

CREATE DATABASE digital_library;

CREATE USER libraryadmin WITH PASSWORD 'libraryadmin';

\c digital_library;

GRANT ALL ON SCHEMA PUBLIC TO libraryadmin;