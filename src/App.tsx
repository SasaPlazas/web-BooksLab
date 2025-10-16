
import BooksPage from "./pages/booksPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddPage from "./pages/addPage";
import EditBook from "./pages/editPage";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/addBook" element={<AddPage />} />
        <Route path="/editPage/:id" element={<EditBook/>} />
      </Routes>
    </Router>
  );
}

export default App;

