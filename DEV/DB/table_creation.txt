CREATE TABLE book (
	id		 BIGSERIAL,
	title	 VARCHAR(256) NOT NULL,
	release_date DATE NOT NULL,
	num_pages	 INTEGER NOT NULL,
	cover_image	 BYTEA,
	PRIMARY KEY(id)
);

CREATE TABLE author (
	id	 BIGSERIAL,
	name	 VARCHAR(512) NOT NULL,
	biography	 VARCHAR(1024),
	birth_date DATE,
	death_date DATE,
	PRIMARY KEY(id)
);

CREATE TABLE genre (
	id	 BIGSERIAL,
	name VARCHAR(128) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE end_user (
	id		 BIGSERIAL,
	username	 VARCHAR(256) NOT NULL,
	password_hash VARCHAR(256) NOT NULL,
	email	 VARCHAR(256) NOT NULL,
	is_admin	 BOOL NOT NULL,
	creation_date DATE NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE end_user_book (
	end_user_id BIGINT,
	book_id	 BIGINT,
	PRIMARY KEY(end_user_id,book_id)
);

CREATE TABLE book_author (
	book_id	 BIGINT,
	author_id BIGINT,
	PRIMARY KEY(book_id,author_id)
);

CREATE TABLE book_genre (
	book_id	 BIGINT,
	genre_id BIGINT,
	PRIMARY KEY(book_id,genre_id)
);

ALTER TABLE genre ADD UNIQUE (name);
ALTER TABLE end_user ADD UNIQUE (username, password_hash, email);
ALTER TABLE end_user_book ADD CONSTRAINT end_user_book_fk1 FOREIGN KEY (end_user_id) REFERENCES end_user(id);
ALTER TABLE end_user_book ADD CONSTRAINT end_user_book_fk2 FOREIGN KEY (book_id) REFERENCES book(id);
ALTER TABLE book_author ADD CONSTRAINT book_author_fk1 FOREIGN KEY (book_id) REFERENCES book(id);
ALTER TABLE book_author ADD CONSTRAINT book_author_fk2 FOREIGN KEY (author_id) REFERENCES author(id);
ALTER TABLE book_genre ADD CONSTRAINT book_genre_fk1 FOREIGN KEY (book_id) REFERENCES book(id);
ALTER TABLE book_genre ADD CONSTRAINT book_genre_fk2 FOREIGN KEY (genre_id) REFERENCES genre(id);

