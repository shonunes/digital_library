/* LIST EXISTING BOOKS */
CREATE OR REPLACE FUNCTION list_books()
RETURNS TABLE
(
	title VARCHAR(256),
	release_date DATE,
	cover BYTEA,
	authors TEXT
)
LANGUAGE plpgsql
AS $$
BEGIN
	RETURN QUERY
	SELECT b.title, b.release_date, b.cover_image, STRING_AGG(a.name, ', ') AS authors
	FROM book AS b
	LEFT JOIN book_author AS ba ON b.id = ba.book_id
	LEFT JOIN author AS a ON ba.author_id = a.id
	GROUP BY b.id;
END;
$$;


