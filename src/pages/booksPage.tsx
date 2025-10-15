//import el useSelector
import { useSelector, useDispatch } from "react-redux";
import BookCard from "../components/bookCard";
//importar el type RootState
import type { RootState } from "../redux/store";
import { useGetBooksQuery } from "../services/booksAPI";
import { saveBooks } from "../redux/booksSlices";

function BooksPage() {
  //utilizar el useSelector para obtener el estado global
  const books = useSelector((state: RootState) => state.book.books);
  const { data: apiData, error } = useGetBooksQuery(10);
  console.log(apiData);


  const dispatch = useDispatch();

  if (apiData && !books?.length) {
    const initialBooks = apiData.docs.map(
      (book: {
        cover_edition_key: string;
        title: string;
        author_name?: string[];
        first_publish_year?: number;
      }) => {
      return {
        id: book.cover_edition_key,
        title: book.title,
        author: book.author_name?.[0] ?? "",
        year: book.first_publish_year,
      };
    }
    );
    
    dispatch(saveBooks(initialBooks));
    if (error) alert("Se produjo un error obteniendo los libros");
  
  }
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
