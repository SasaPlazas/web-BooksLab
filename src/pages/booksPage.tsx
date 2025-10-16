//import el useSelector
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import BookCard from "../components/bookCard";
//importar el type RootState
import type { RootState } from "../redux/store";
import { useGetBooksQuery } from "../services/booksAPI";
import { saveBooks } from "../redux/booksSlices";
import { useNavigate } from "react-router-dom";

function BooksPage() {
  //utilizar el useSelector para obtener el estado global
  const books = useSelector((state: RootState) => state.book.books);
  const { data: apiData, error } = useGetBooksQuery(20);
  
  console.log(apiData);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  //se coloca aqui y se crea un handle  que lleve al path de la pagina 
  const handleAddBook = () => {
    navigate("/addBook");
  };

  // Evitar actualizar el estado durante el render: usar useEffect
  useEffect(() => {
    if (apiData && !books.length) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const initialBooks = apiData.docs.map((book: any) => {
        return {
          id: book.cover_edition_key,
          title: book.title,
          author: book.author_name,
          year: book.first_publish_year,
        };
      });
      dispatch(saveBooks(initialBooks));
    }

    if (error) alert("Se produjo un error obteniendo los libros");
  }, [apiData, books.length, dispatch, error]);

  return (
    <>
      <h1>Lista de libros</h1>
      <button onClick={handleAddBook}>Add Book</button>

      {books?.map((newBook) => (
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
