import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import BookList from "./pages/booksPage";
import AddPage from "./pages/addPage";
import { setBooks } from "./store/booksSlices";
import { useDispatch, useSelector } from "react-redux";
import { useGetBooksQuery } from "./services/booksAPI";
import EditBook from "./pages/editPage";
import type { RootState } from "./store/store";

interface OpenLibraryDoc {
  cover_edition_key?: string;
  key?: string;
  title?: string;
  author_name?: string[] | string;
  first_publish_year?: number;
}

interface OpenLibraryResponse {
  docs: OpenLibraryDoc[];
}

function App() {
  const dispatch = useDispatch();

  const bookList = useSelector((state: RootState) => state.book.bookList);
  const { data, error } = useGetBooksQuery(10) as { data?: OpenLibraryResponse; error?: unknown };

  useEffect(() => {
    if (data && (!bookList || bookList.length === 0)) {
      const docs = Array.isArray(data.docs) ? data.docs : [];
      const initialBooks = docs.map((book: OpenLibraryDoc, idx: number) => {
        const fallbackId = `${book.key ?? "no-key"}-${book.title ?? "no-title"}-${book.first_publish_year ?? "no-year"}-${idx}`;
        return {
          id: String(book.cover_edition_key ?? book.key ?? fallbackId),
          title: book.title ?? "Untitled",
          author: Array.isArray(book.author_name)
            ? (book.author_name[0] ?? "Unknown Author")
            : (book.author_name ?? "Unknown Author"),
          year: typeof book.first_publish_year === "number" ? book.first_publish_year : undefined,
        };
      });
      dispatch(setBooks(initialBooks));
    }
  }, [data, bookList, dispatch]);

  useEffect(() => {
    if (error) {
      console.error("Se produjo un error obteniendo los libros", error);
    }
  }, [error]);

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
