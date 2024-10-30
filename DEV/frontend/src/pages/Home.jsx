import { useState, useEffect } from "react";
import api from "../api";
import Book from "../components/Book"

function Home() {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState("");
    const [release_date, setReleaseDate] = useState("");
    const [num_pages, setNumPages] = useState(0);


    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = () => {
        api
            .get("/api/books/")
            .then((res) => res.data)
            .then((data) => {
                setBooks(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteBook = (id) => {
        api
            .delete(`/api/books/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Book deleted!");
                else alert("Failed to delete book.");
                getBooks();
            })
            .catch((error) => alert(error));
    };

    const addBook = (e) => {
        e.preventDefault();
        api
            .post("/api/books/", { title, release_date, num_pages }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                if (res.status === 201) alert("Book added!");
                else alert("Failed to add book.");
                getBooks();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <div>
                <h1>Books</h1>
                <br />
                {books.map((book) => (
                    <Book book={book} onDelete={deleteBook} key={book.id} />
                ))}
            </div>
            <br />
            <br />
            <h2>Add a Book</h2>
            <form onSubmit={addBook}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <br />
                <br />
                <label htmlFor="release_date">Release Date:</label>
                <br />
                <input
                    type="date"
                    id="release_date"
                    name="release_date"
                    required
                    onChange={(e) => setReleaseDate(e.target.value)}
                    value={release_date}
                />
                <br />
                <br />
                <label htmlFor="num_pages">Number of pages:</label>
                <br />
                <input
                    type="integer"
                    id="num_pages"
                    name="num_pages"
                    required
                    onChange={(e) => setNumPages(e.target.value)}
                    value={num_pages}
                />
                <br />
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;