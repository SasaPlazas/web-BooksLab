import { useState } from "react";
import { useDispatch, } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { Book } from "../redux/booksSlices";
import { addBooks } from "../redux/booksSlices";

const AddPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

// estados separados en vez de un objeto
  const [bookTitle, setBookTitle] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<string>("");
  const [bookYear, setBookYear] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    // Versión mínima y memorizable con persistencia en localStorage
    const newBook: Book = {
      id: crypto.randomUUID(),
      title: bookTitle,
      author: bookAuthor,
      year: bookYear ? Number(bookYear) : undefined,

    };

    dispatch(addBooks(newBook));
    navigate("/");
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
        <label>Author</label>
        <input type="text" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)} />
        <label htmlFor="year">Año</label>
        <input type="number" id="year" value={bookYear} onChange={(e) => setBookYear(e.target.value)} />
        <button type="submit">Guardar</button>
      </form>
      


    </div>
  );

}

export default AddPage;
