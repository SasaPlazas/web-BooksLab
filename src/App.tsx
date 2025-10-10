
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPage from "./pages/addPage";
import BooksPage from "./pages/booksPage";
import EditPage from  "./pages/editPage";
// import Dashboard from "./pages/Dashboard";



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<AddPage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="edit" element={<EditPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
