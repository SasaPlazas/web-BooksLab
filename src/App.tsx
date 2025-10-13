
import BooksPage from "./pages/booksPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

