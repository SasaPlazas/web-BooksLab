import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import type { RootState } from "../redux/store";
import {editBook } from "../redux/booksSlices";
import { useEffect, useState } from "react";


const EditBook = () => {

  //useParams para pode recibir el id del libro a editar

  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const books = useSelector((state: RootState) => state.book.books);
  //para saber que libro estamos editando
  const bookToEdit = books.find((book) => book.id === id);

  const [bookTitle, setBookTitle] = useState<string>(""); 
  const [bookAuthor, setBookAuthor] = useState<string>("");
  const [bookYear, setBookYear] = useState<string>(""); 

  // para agarrar los datos que ya vienen del libro
  useEffect(() => {
    if (!bookToEdit) return;
    setBookTitle(bookToEdit.title);
    setBookAuthor(bookToEdit.author);
    setBookYear(bookToEdit.year ? String(bookToEdit.year) : "");
  }, [bookToEdit]);
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!bookTitle.trim() || !bookAuthor) {
      alert("Por favor complete Title y Author");
      return;
    }

    dispatch(editBook({

      id: bookToEdit?.id || "",
      title: bookTitle,
      author: bookAuthor,
      year: bookYear ? Number(bookYear) : undefined,

    }))
    navigate("/")
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Edit Book</h1>
        <input type="text" placeholder="title" value= {bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
        <input type="text" placeholder="author" value= {bookAuthor} onChange={(e)=> setBookAuthor(e.target.value)} />
        <input type="number" placeholder="year" value= {bookYear} onChange={(e) => setBookYear(e.target.value)}/>
        <button type="submit">Guardar cambios</button>
      </form>
    </>
  );
}


export default EditBook;
