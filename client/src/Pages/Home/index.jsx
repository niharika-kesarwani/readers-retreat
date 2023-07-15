/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  SecondaryContainer,
  ModalProvider,
  InputTextLabel,
  InputTextVariant,
  ContainedActionBtn,
  OutlinedActionBtn,
  IconActionBtn,
  BookForm,
  StudentForm,
} from "../../Components";
import PageContainer from "../../Layouts/PageContainer";
import StudentIcon from "../../Asset/Home/StudentIcon.svg";
import BookIcon from "../../Asset/Home/BookIcon.svg";
import {
  addBookMutation,
  addStudentMutation,
  getBooksQuery,
  getStudentsQuery,
} from "../../queries/queries";

const Home = () => {
  const [addBook, { data, loading, error }] = useMutation(addBookMutation);
  const [addStudent] = useMutation(addStudentMutation);

  // ADD STUDENT MODAL:
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const openAddStudentModal = () => setIsAddStudentModalOpen(true);
  const closeAddStudentModal = () => setIsAddStudentModalOpen(false);

  // ADD BOOK MODAL:
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  const openAddBookModal = () => setIsAddBookModalOpen(true);
  const closeAddBookModal = () => setIsAddBookModalOpen(false);
  
  // STUDENT INPUT DATA:
  const [studentData, setStudentData] = useState({
    studentName: "",
    studentId: "",
    studentEmail: "",
    studentNumber: "",
  });

  // BOOK INPUT DATA:
  const [bookData, setBookData] = useState({
    bookTitle: "",
    bookAuthor: "",
    bookDescription: "",
    bookCode: "",
  });

  // HANDLE STUDENT DATA:
  const handleStudentData = (event) => {
    const { name, value } = event.target;
    setStudentData((prevStudentData) => {
      return { ...prevStudentData, [name]: value };
    });
  };

  // HANDLE BOOK DATA:
  const handleBookData = (event) => {
    const { name, value } = event.target;
    setBookData((prevBookData) => {
      return { ...prevBookData, [name]: value };
    });
  };

  // HANDLE ADD STUDENT:
  const handleAddStudentSubmit = (event) => {
    event.preventDefault();
    console.log(studentData);
    closeAddStudentModal();
    addStudent({
      variables: studentData,
      refetchQueries: [{ query: getStudentsQuery }],
    });
  };

  // HANDLE ADD BOOK:
  const handleAddBookSubmit = (event) => {
    event.preventDefault();
    console.log(bookData);
    closeAddBookModal();
    addBook({
      variables: bookData,
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  return (
    <PageContainer className="flex">
      <div className="flex w-full flex-col gap-8 px-4 py-4 md:flex-row xl:px-0">
        {/* STUDENT MODAL */}
        <div className="flex basis-1/2 items-center justify-center rounded-lg bg-[#ddd] p-6">
          <ModalProvider
            modalTitle="ADD STUDENT"
            isOpen={isAddStudentModalOpen}
            closeModal={closeAddStudentModal}
            modalBtnVariant={
              <button
                onClick={openAddStudentModal}
                className="h-[300px] w-[300px] rounded-full bg-[#ddd] transition-all active:scale-95"
                title="Add Student"
              >
                <img
                  src={StudentIcon}
                  alt="studentButton"
                  className="h-full w-full object-cover"
                />
              </button>
            }
          >
            <div className="p-2">
              {/* STUDENT FORM */}
              <StudentForm closeStudentForm={closeAddStudentModal} />
            </div>
          </ModalProvider>
        </div>
        {/* BOOK MODAL */}
        <div className="flex basis-1/2 items-center justify-center rounded-lg bg-[#ddd]">
          <ModalProvider
            modalTitle="ADD BOOK"
            isOpen={isAddBookModalOpen}
            closeModal={closeAddBookModal}
            modalBtnVariant={
              <button
                onClick={openAddBookModal}
                className="h-[300px] w-[300px] rounded-full bg-[#ddd] transition-all active:scale-95"
                title="Add Student"
              >
                <img
                  src={BookIcon}
                  alt="BookData"
                  className="h-full w-full object-cover"
                />
              </button>
            }
          >
            <div className="p-2">
              {/* BOOK FORM */}
              <BookForm closeBookForm={closeAddBookModal} />
            </div>
          </ModalProvider>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
