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



// const books = [
//   {
//     id: "1",
//     title: "Eloquent JavaScript",
//     author: "Marijn Haverbeke",
//     description:
//       "This is a book about JavaScript, programming, and the wonders of the digital.",
//   },
//   {
//     id: "2",
//     title: "JavaScript: The Definitive Guide",
//     author: "David Flanagan",
//     description:
//       "JavaScript: The Definitive Guide is another beginner-friendly book for anyone interested in building powerful web apps.",
//   },
// ];
// const lendingHistory = [
//   {
//     id: "1",
//     bookId: "1",
//     studentId: "1",
//     lentDate: "02/06/2023",
//     returnDate: "10/06/2023",
//   },
//   {
//     id: "2",
//     bookId: "2",
//     studentId: "2",
//     lentDate: "01/07/2023",
//     returnDate: "06/07/2023",
//   },
//   {
//     id: "3",
//     bookId: "1",
//     studentId: "3",
//     lentDate: "15/06/2023",
//     returnDate: "25/06/2023",
//   },
// ];
// const students = [
//   {
//     id: "1",
//     rollNumber: 1,
//     name: "Niharika Kesarwani",
//     email: "niharikak@gmail.com",
//     phoneNo: "1234567890",
//   },
//   {
//     id: "2",
//     name: "Vivek Bhatt",
//     email: "vivekbhatt@gmail.com",
//     phoneNo: "1234567890",
//   },
//   {
//     id: "3",
//     name: "Shraddha Vishwakarma",
//     email: "shraddhav@gmail.com",
//     phoneNo: "1234567890",
//   },
// ];
