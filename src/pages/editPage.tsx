import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import type { RootState } from "../store/store";
import { editBook } from "../store/booksSlices";

const EditBook = () => {
  const location = useLocation();
  const bookId = location.pathname.trim().split("/").at(-1);
  const bookList = useSelector((state: RootState) => state.book.bookList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const bookData = bookList?.find((book) => book.id === bookId);

  const [book, setBook] = useState(bookData!);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editBook(book));
    navigate(-1);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Title</label>
        <input
          type="text"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />
        <label>Author</label>
        <input
          type="text"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />
        <label>Year</label>
        <input
          type="number"
          value={book.year}
          onChange={(e) => setBook({ ...book, year: Number(e.target.value) })}
        />
        <button type="submit">Save Changes</button>
      </form>
    </>
  );
};

export default EditBook;
