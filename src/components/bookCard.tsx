import { useDispatch } from "react-redux";
import type { Book } from "../store/booksSlices"
import { deleteBook } from "../store/booksSlices";
import { useNavigate } from "react-router-dom";

const BookCard = (book: Book) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => [dispatch(deleteBook(book.id))];
  return (
    <>
      <div>
        <h4>{book.title}</h4>
        <p>{book.author}</p>
        <p>{book.year || "Unknown Publish Year"}</p>
        <button onClick={() => navigate(`/books/edit/${book.id}`)}>Edit</button>
        <button onClick={handleDelete}>Delete Book</button>
      </div>
    </>
  );
};

export default BookCard;
