import "./App.css";
import { useState } from "react";
import { getAll } from "./BooksAPI";
import BookList from "./BookList";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [bookshelves, setBookshelves] = useState(null);

  getAll().then((books) => {
    setBookshelves({
      currentlyReading: {
        title: "Currently Reading",
        books: books.filter((book) => book.shelf === "currentlyReading"),
      },
      wantToRead: {
        title: "Want to Read",
        books: books.filter((book) => book.shelf === "wantToRead"),
      },
      read: {
        title: "Read",
        books: books.filter((book) => book.shelf === "read"),
      },
      all: {
        title: "All Books",
        books: books,
      }
    });
  });

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {bookshelves?.all && <BookList bookshelf={bookshelves.all} />}              
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
