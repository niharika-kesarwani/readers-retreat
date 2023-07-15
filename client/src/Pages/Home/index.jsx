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
} from "../../Components";
import PageContainer from "../../Layouts/PageContainer";
import StudentIcon from "../../Asset/Home/StudentIcon.svg";
import BookIcon from "../../Asset/Home/BookIcon.svg";
import { addBookMutation, getBooksQuery } from "../../queries/queries";

const Home = () => {
  const [addBook, { data, loading, error }] = useMutation(addBookMutation);

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
              <form
                className="flex flex-col gap-7"
                onSubmit={handleAddStudentSubmit}
              >
                <div className="flex flex-col gap-3">
                  <InputTextLabel labelText="Name">
                    <InputTextVariant
                      inputTextName="studentName"
                      inputTextType="text"
                      inputTextHandle={handleStudentData}
                      inputTextValue={studentData.studentName}
                    />
                  </InputTextLabel>
                  <InputTextLabel labelText="ID Number">
                    <InputTextVariant
                      inputTextName="studentId"
                      inputTextType="text"
                      inputTextHandle={handleStudentData}
                      inputTextValue={studentData.studentId}
                    />
                  </InputTextLabel>
                  <InputTextLabel labelText="Email">
                    <InputTextVariant
                      inputTextName="studentEmail"
                      inputTextType="text"
                      inputTextHandle={handleStudentData}
                      inputTextValue={studentData.studentEmail}
                    />
                  </InputTextLabel>
                  <InputTextLabel labelText="Phone Number">
                    <InputTextVariant
                      inputTextName="studentNumber"
                      inputTextType="text"
                      inputTextHandle={handleStudentData}
                      inputTextValue={studentData.studentNumber}
                    />
                  </InputTextLabel>
                </div>
                <div className="flex gap-3">
                  <ContainedActionBtn
                    actionText="ADD STUDENT"
                    className="basis-1/2"
                    actionType="submit"
                  />
                  <OutlinedActionBtn
                    actionText="CANCEL"
                    className="basis-1/2"
                    actionHandler={closeAddStudentModal}
                    actionType="button"
                  />
                </div>
              </form>
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
              <form
                className="flex flex-col gap-7"
                onSubmit={handleAddBookSubmit}
              >
                <div className="flex flex-col gap-3">
                  <InputTextLabel labelText="Title">
                    <InputTextVariant
                      inputTextName="bookTitle"
                      inputTextType="text"
                      inputTextHandle={handleBookData}
                      inputTextValue={bookData.bookTitle}
                    />
                  </InputTextLabel>
                  <InputTextLabel labelText="Author">
                    <InputTextVariant
                      inputTextName="bookAuthor"
                      inputTextType="text"
                      inputTextHandle={handleBookData}
                      inputTextValue={bookData.bookAuthor}
                    />
                  </InputTextLabel>
                  <InputTextLabel labelText="Description">
                    <InputTextVariant
                      inputTextName="bookDescription"
                      inputTextType="text"
                      inputTextHandle={handleBookData}
                      inputTextValue={bookData.bookDescription}
                    />
                  </InputTextLabel>
                  <InputTextLabel labelText="Code">
                    <InputTextVariant
                      inputTextName="bookCode"
                      inputTextType="text"
                      inputTextHandle={handleBookData}
                      inputTextValue={bookData.bookCode}
                    />
                  </InputTextLabel>
                </div>
                <div className="flex gap-3">
                  <ContainedActionBtn
                    actionText="ADD BOOK"
                    className="basis-1/2"
                    actionType="submit"
                  />
                  <OutlinedActionBtn
                    actionText="CANCEL"
                    className="basis-1/2"
                    actionHandler={closeAddBookModal}
                    actionType="button"
                  />
                </div>
              </form>
            </div>
          </ModalProvider>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
