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
  const { data: apiData, error } = useGetBooksQuery(20);
  
  console.log(apiData);


  const dispatch = useDispatch();

  // Evitar actualizar el estado durante el render: usar useEffect
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
