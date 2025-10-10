// import { useSelector, useDispatch } from "react-redux";
// import { selectBooks } from "../store/booksSlices";
import { Link, useNavigate } from "react-router-dom";
import { useGetBooksQuery } from "../services/booksAPI";

function BooksPage() {
  // const books = useSelector(selectBooks);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { data } = useGetBooksQuery('');
  console.log(data);
  
  

  // const handleDelete = (id: string) => {
  //   dispatch(removeBook(id));
  // };

  // const handleEdit = (id: string) => {
  //   navigate(`/edit/${id}`);
  // };

  return (
    <div style={{ padding: 16 }}>
      <h1>Books</h1>
      <div style={{ marginBottom: 12 }}>
        <Link to="/add">➕ Agregar libro</Link>
      </div>
      {/* {books.length === 0 ? (
        <p>No hay libros. Agrega uno con el botón de arriba.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {books.map((b) => (
            <li key={b.id} style={{ border: "1px solid #ccc", marginBottom: 8, padding: 8 }}>
              <div>
                <strong>{b.title}</strong> — {b.author} ({b.year})
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button onClick={() => handleDelete(b.id)}> Eliminar</button>
                <button onClick={() => handleEdit(b.id)}> Editar</button>
              </div>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default BooksPage;