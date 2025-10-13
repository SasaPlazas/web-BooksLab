import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookCard from "../components/bookCard";
import type { RootState } from "../store/store";

function BooksPage() {
  const bookList = useSelector((state: RootState) => state.book.bookList);
  const navigate = useNavigate();

  return (
    <>
      <h1>Books List</h1>
      <button onClick={() => navigate("/books/add")}>Add Book</button>
      {bookList?.map((newBook) => (
        <BookCard
          key={newBook.id}
          id={newBook.id}
          title={newBook.title}
          author={newBook.author}
          year={newBook.year}
        />
      ))}
    </>
  );
}

export default BooksPage;
