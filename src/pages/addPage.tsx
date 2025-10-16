import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { Book } from "../redux/booksSlices";
import { addBooks } from "../redux/booksSlices";
import type { RootState } from "../redux/store";

const AddPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.book.books);

  const [book, setBooks] = useState<Book>({
    id: "",
    title: "",
    author: "",
    year: undefined, 
    
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const title = book.title.trim();
    const author = book.author.trim();

    if (!title || !author) {
      alert("Por favor complete Title y Author");
      return;
    }

    // Versión mínima y memorizable con persistencia en localStorage
    const newBook: Book = {
      id: `local-${Date.now()}`,
      title,
      author,
      year: book.year ?? undefined,
    };

    const nextBooks = [...books, newBook];
    try {
      localStorage.setItem("books", JSON.stringify(nextBooks));
    } catch {
      // Ignorar errores de localStorage en ambientes sin soporte
    }

    dispatch(addBooks(newBook));
    navigate("/");
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" onChange={(e) => setBooks({ ...book, title: e.target.value })} />
        <label>Autor</label>
        <input type="text" onChange={(e) => setBooks({ ...book, author: e.target.value })} />
        <label htmlFor="year">Año</label>
        <input type="number" id="year" onChange={(e) => setBooks({ ...book, year: Number(e.target.value) })} />
        <button type="submit">Guardar</button>
      </form>
      


    </div>
  );

}

export default AddPage;
