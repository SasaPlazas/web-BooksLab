
// import { useNavigate } from "react-router-dom";
import type { Book } from "../redux/booksSlices";

const BookCard = (books: Book) => {

  return (
    <>
      <div>
        <h3>{books.title}</h3>
        <p>{books.author}</p>
        <p>{books.year}</p>
      </div>
    </>
  );
};

export default BookCard;
