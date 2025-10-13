import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { Book } from "../store/booksSlices";
import { addBook } from "../store/booksSlices";

const AddPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState<Book>({
    id: "",
    title: "",
    author: "",
    year: undefined,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = book.title.trim();
    const author = book.author.trim();

    if (!title || !author) {
      alert("Por favor complete Title y Author");
      return;
    }

    const newBook: Book = {
      id: `local-${Date.now()}`,
      title,
      author,
      year: typeof book.year === "number" && !Number.isNaN(book.year) ? book.year : undefined,
    };

    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />

        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={book.year ?? ""}
          onChange={(e) =>
            setBook({ ...book, year: e.target.value ? Number(e.target.value) : undefined })
          }
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddPage;
