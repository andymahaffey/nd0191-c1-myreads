import "./App.css";
import BookshelfPage from "./BookshelfPage";
import { Routes, Route } from 'react-router-dom';
import SearchPage from "./SearchPage";

function App() {
  return (    
    <Routes>
      <Route exact path="/" element={<BookshelfPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
