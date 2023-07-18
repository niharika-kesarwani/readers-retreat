/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ModalProvider, BookForm, StudentForm } from "../../Components";
import PageContainer from "../../Layouts/PageContainer";
import StudentIcon from "../../Asset/Home/StudentIcon.svg";
import BookIcon from "../../Asset/Home/BookIcon.svg";

const Home = () => {
  // ADD STUDENT MODAL:
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const openAddStudentModal = () => setIsAddStudentModalOpen(true);
  const closeAddStudentModal = () => setIsAddStudentModalOpen(false);

  // ADD BOOK MODAL:
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  const openAddBookModal = () => setIsAddBookModalOpen(true);
  const closeAddBookModal = () => setIsAddBookModalOpen(false);

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
                title="Add Book"
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
