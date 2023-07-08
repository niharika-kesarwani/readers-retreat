import React, { useState } from "react";
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

const Home = () => {
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
  };

  return (
    <div>
      <div className="flex h-[90vh] items-center justify-center gap-16">
        {/* STUDENT MODAL */}
        <ModalProvider
          modalTitle="ADD STUDENT"
          isOpen={isAddStudentModalOpen}
          closeModal={closeAddStudentModal}
          modalBtnVariant={
            <SecondaryContainer categoryName="student">
              <button onClick={openAddStudentModal}>
                <AddCircleIcon sx={{ fontSize: "50px" }} />
              </button>
            </SecondaryContainer>
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
        {/* BOOK MODAL */}
        <ModalProvider
          modalTitle="ADD BOOK"
          isOpen={isAddBookModalOpen}
          closeModal={closeAddBookModal}
          modalBtnVariant={
            <SecondaryContainer categoryName="student">
              <button onClick={openAddBookModal}>
                <AddCircleIcon sx={{ fontSize: "50px" }} />
              </button>
            </SecondaryContainer>
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
  );
};

export default Home;
