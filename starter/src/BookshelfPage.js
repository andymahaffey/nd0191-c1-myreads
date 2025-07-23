import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import { getAll, update } from "./BooksAPI";
import BookList from "./BookList";

function BookshelfPage() {
  const [bookshelves, setBookshelves] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    loadBookshelves().finally(() => setLoading(false));
  }, []);

  const loadBookshelves = () => {
    return getAll().then((books) => {
      setBookshelves([
        {
          title: "Currently Reading",
          books: books.filter((book) => book.shelf === "currentlyReading"),
        },
        {
          title: "Want to Read",
          books: books.filter((book) => book.shelf === "wantToRead"),
        },
        {
          title: "Read",
          books: books.filter((book) => book.shelf === "read"),
        }
      ]);
    });
  }
  
  const bookshelfChanged = (shelf, book) => {
    setLoading(true);
    update(book, shelf).then(() => {
      return loadBookshelves();
    }).finally(() => setLoading(false));
  }

  return (
    <div className="app">
        <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            {loading && <div className="loading-container"><DotLoader size={30} /></div>}
            <div className="list-books-content">
              {bookshelves.map((bs) => (
                <BookList key={bs.title} bookshelf={bs} bookshelfChanged={bookshelfChanged} />
              ))}              
            </div>
            <div className="open-search">
                <Link to="/search" />
            </div>
        </div>
    </div>
  );
}

export default BookshelfPage;
