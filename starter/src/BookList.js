import BookCard from "./BookCard";

const BookList = ({bookshelf}) => {
    const listofBooks = bookshelf.books.map((book) => (
        <li key={book.id}>
            <BookCard book={book} />
        </li>
    ));

    return <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelf.title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {listofBooks}
            </ol>
        </div>
    </div>
};

export default BookList;