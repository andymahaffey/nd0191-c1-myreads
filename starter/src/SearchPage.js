import { useEffect, useState } from "react";
import { getAll, search, update } from "./BooksAPI";
import BookCard from "./BookCard";
import DotLoader from "react-spinners/DotLoader";
import DebouncedInput from "./DebouncedInput";

const SearchPage = ({onClose}) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [savedBooks, setSavedBooks] = useState([]);
    const [query, setQuery] = useState('');
    
    useEffect(() => {
        search(query).then((results) => {
            if (results && !results.error) {
                results.forEach((book) => {
                    const savedBook = savedBooks.find((b) => b.id === book.id);
                    if (savedBook) {
                        book.shelf = savedBook.shelf;
                    } else {
                        book.shelf = 'none';
                    }
                });
                setBooks(results);
            } else {
                setBooks([]);
            }
        });
    }, [query]);

    useEffect(() => {
        setLoading(true);
        loadSavedBooks().finally(() => {
            setLoading(false);
        });
    }, []);
    
    const loadSavedBooks = () => {
        return getAll().then((books) => {
            setSavedBooks(books);        
        });
    }

    const bookshelfChanged = (shelf, book) => {
        setLoading(true);
        update(book, shelf).then(() => {
            return loadSavedBooks();
        }).finally(() => {
            setLoading(false);
        });
    }

    return <div className="search-books">
        <div className="search-books-bar">
            <a
                className="close-search"
                onClick={onClose}
            >
                Close
            </a>
            <div className="search-books-input-wrapper">
                <DebouncedInput
                    inputChanged={setQuery}
                    debounceMs={250}
                    disabled={loading}
                />
                {/* <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={loading} 
                >
                </input> */}
                    
            </div>
        </div>
        <div className="search-books-results">
            {loading && <div className="loading-container"><DotLoader size={30} /></div>}
            <ol className="books-grid">
                {books.map((book) => (
                    <li key={book.id}>
                        <BookCard book={book} bookshelfChanged={bookshelfChanged} />
                    </li>
                ))}
            </ol>
        </div>
    </div>
};

export default SearchPage;