import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useEffect } from "react";
import "./App.css";
import BookList from "./pages/booksPage";
import AddPage from "./pages/addPage";
// import { setBooks } from "./store/booksSlices";
// import { useDispatch, useSelector } from "react-redux";
// import { useGetBooksQuery } from "./services/booksAPI";
import EditBook from "./pages/editPage";
// import type { RootState } from "./store/store";



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/books" replace />} />
          <Route path="/books" element={<BookList />}></Route>
          <Route path="/books/add" element={<AddPage />} />
          <Route path="/books/edit/:id" element={<EditBook />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
