import BookshelfChanger from "./BookshelfChanger";

const BookCard = ({ book, bookshelfChanged }) => {
    const bookshelfSelected = (shelf) => {
        bookshelfChanged(shelf, book);
    };

    return <div className="book">
        <div className="book-top">
            <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks?.thumbnail || ''})`
                }}                
            ></div>
            <BookshelfChanger bookshelfSelected={bookshelfSelected} initialValue={book.shelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors?.join(', ')}</div>
    </div>
};

export default BookCard;
