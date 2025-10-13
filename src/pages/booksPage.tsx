//import el useSelector 
import { useSelector } from "react-redux";
import BookCard from "../components/bookCard";
//importar el type RootState
import type { RootState } from "../redux/store";
import { useGetBooksQuery } from "../services/booksAPI";

function BooksPage() {

  //utilizar el useSelector para obtener el estado global
  const books = useSelector((state: RootState) => state.book.books);
  const { data: apiData } = useGetBooksQuery(10);
  console.log(apiData);

  return (
    <>
      <h1>Lista de libros</h1>

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
