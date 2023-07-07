import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Layouts/Header";
import { Home, Student, Book } from "./Pages";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/books" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
