
import BooksPage from "./pages/booksPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddPage from "./pages/addPage";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/addBook" element={<AddPage />} />
      </Routes>
    </Router>
  );
}

export default App;

