
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import type { Book } from "../redux/booksSlices";
import { deleteBook } from "../redux/booksSlices";

//se importa el useNavigate

const BookCard = (books: Book) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

//se coloca aqui y se crea un handle  que lleve al path de la pagina 
  const handleEditBook = () => {
    navigate(`/editPage/${books.id}`); //se edita respecto a su id.
  };

  const handleDeleteBook = () => {

    dispatch(deleteBook(books.id));
  };

  return (
    <>
      <div>
        <h3>{books.title}</h3>
        <p>{books.author}</p>
        <p>{books.year}</p>
      </div>
      <button onClick={handleEditBook}>Edit Book</button>
      <button onClick={handleDeleteBook}>Delete Book</button>
    </>
  );
};

export default BookCard;
