# MyReads - Personal Bookshelf Manager

A React application that allows you to organize your books into three categories: Currently Reading, Want to Read, and Read. Built with React and React Router, this app provides an intuitive interface for managing your personal library and discovering new books.


## Features

- 📚 **Organize Books**: Categorize books into "Currently Reading", "Want to Read", and "Read" shelves
- 🔍 **Search Functionality**: Search for new books to add to your library
- 🔄 **Dynamic Shelf Management**: Move books between shelves with a simple dropdown interface
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Updates**: Changes persist and update across the application instantly

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/andymahaffey/nd0191-c1-myreads.git
   cd nd0191-c1-myreads/starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app.
   
## API Reference

The application uses the Udacity Books API with the following endpoints:

### `getAll()`
Returns a Promise with all books in your library.

### `update(book, shelf)`
- **book**: Book object containing an `id` property
- **shelf**: String - one of "wantToRead", "currentlyReading", "read"
- Returns a Promise with the updated book information

### `search(query)`
- **query**: String - search term
- Returns a Promise with an array of book objects
- Limited to specific search terms (see SEARCH_TERMS.md)

### `get(bookId)`
- **bookId**: String - unique identifier for a book
- Returns a Promise with book details

## How to Use

### Main Bookshelf Page
- View all your books organized into three shelves
- Use the green dropdown button on each book to move it to a different shelf
- Click the "+" button to search for new books

### Search Page
- Enter search terms to find new books
- Search terms are limited to specific keywords (see available terms in the search)
- Click the dropdown on any search result to add it to one of your shelves
- Use the back arrow to return to the main page

### Book Shelves
- **Currently Reading**: Books you're actively reading
- **Want to Read**: Books you plan to read in the future
- **Read**: Books you've finished reading
