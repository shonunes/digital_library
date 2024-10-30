import React from "react";

function Book({ book, onDelete }) {
    return (
        <div className="book-container">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-release_date">Release date: {book.release_date}</p>
            <p className="book-num_pages">Number of pages: {book.num_pages}</p>
            <button className="delete-button" onClick={() => onDelete(book.id)}>
                Delete
            </button>
        </div>
    );
}

export default Book