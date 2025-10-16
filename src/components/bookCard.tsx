
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router";
// import { UseDispatch } from "react-redux";
import type { Book } from "../redux/booksSlices";

//se importa el useNavigate

const BookCard = (books: Book) => {

  const navigate = useNavigate();

//se coloca aqui y se crea un handle  que lleve al path de la pagina 
  const handleAddBook = () => {
    navigate("/addBook");
  };
 

  return (
    <>
      <div>
        <h3>{books.title}</h3>
        <p>{books.author}</p>
        <p>{books.year}</p>
      </div>
      <button>Eliminar</button>
      <button onClick={handleAddBook}>Add Book</button>
      
    </>
  );
};

export default BookCard;
