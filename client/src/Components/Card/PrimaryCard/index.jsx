import React, { useState } from "react";
import { toast } from "react-hot-toast";
import "./PrimaryCard.css";
import { TruncUtil } from "../../../Utils";
import ModalProvider from "../../ModalProvider";
import { IconActionBtn } from "../../Actions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { BookForm, StudentForm } from "../../Form";
import { useMutation } from "@apollo/client";
import {
  deleteBookMutation,
  getBooksQuery,
  deleteStudentMutation,
  getStudentsQuery,
} from "../../../queries/queries";

const PrimaryCard = (props) => {
  const [deleteStudent] = useMutation(deleteStudentMutation);

  const { className, children, isStudent } = props;
  const [isModalOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const editOpen = () => setIsEditOpen(true);
  const editClose = () => setIsEditOpen(false);

  const [deleteBook] = useMutation(deleteBookMutation);

  const classes =
    "primary-card rounded-lg p-4 bg-[#8EC5FC] relative overflow-hidden flex justify-center items-center min-w-[296px] max-w-[296px] h-full cursor-pointer " +
    className;
  return (
    <ModalProvider
      isOpen={isModalOpen}
      closeModal={closeModal}
      modalTitle={`${isStudent ? "STUDENT" : "BOOK"} DETAIL`}
      modalBtnVariant={
        <article className={classes} onClick={() => openModal()}>
          <span className="primary-card-index absolute left-0 top-0 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#000]"></span>
          <span className="absolute left-0 top-0 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#000] pl-10 pt-10 text-xl text-50">
            {props.rollNumber}
          </span>
          <h3 className="z-10 text-xl capitalize text-[#000]">
            {TruncUtil(props.name, 12)}
          </h3>
          <h3 className="overlap-text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl capitalize text-[#fff]">
            {TruncUtil(props.name, 12)}
          </h3>
          <div className="absolute bottom-[12px] right-[12px] flex gap-2">
            <ModalProvider
              modalTitle={`EDIT ${isStudent ? "STUDENT" : "BOOK"}`}
              isOpen={isEditOpen}
              closeModal={editClose}
              modalBtnVariant={
                <button
                  className="bottom-[10px] right-[10px] flex h-9 w-9 items-center justify-center rounded-full bg-600 p-2 text-50 transition-all hover:bg-50 hover:text-950 active:scale-95"
                  onClick={(event) => {
                    event.stopPropagation();
                    editOpen();
                  }}
                  title="Edit"
                >
                  <EditIcon sx={{ fontSize: "16px" }} />
                </button>
              }
            >
              <div className="p-4">
                {props?.isStudent ? (
                  <StudentForm isEditStudent {...props} closeEdit={editClose} />
                ) : (
                  <BookForm isEditBook {...props} closeEdit={editClose} />
                )}
              </div>
            </ModalProvider>

            {isStudent ? (
              <button
                className="bottom-[10px] right-[10px] flex h-9 w-9 items-center justify-center rounded-full bg-600 p-2 text-50 transition-all hover:bg-50 hover:text-950 active:scale-95"
                onClick={(event) => {
                  event.stopPropagation();
                  deleteStudent({
                    variables: { deleteStudentId: props.id },
                    refetchQueries: [{ query: getStudentsQuery }],
                  });
                  toast.success(`Deleted ${props.name} successfully!`);
                }}
              >
                <DeleteIcon sx={{ fontSize: "16px" }} />
              </button>
            ) : (
              <button
                className="bottom-[10px] right-[10px] flex h-9 w-9 items-center justify-center rounded-full bg-600 p-2 text-50 transition-all hover:bg-50 hover:text-950 active:scale-95"
                onClick={(event) => {
                  event.stopPropagation();
                  deleteBook({
                    variables: { deleteBookId: props.id },
                    refetchQueries: [{ query: getBooksQuery }],
                  });
                  toast.success(`Deleted ${props.name} successfully!`);
                }}
              >
                <DeleteIcon sx={{ fontSize: "16px" }} />
              </button>
            )}
          </div>
        </article>
      }
    >
      <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-col justify-start gap-2 rounded-md bg-100 p-2">
          <span>Name</span>
          <p className="rounded-md bg-50 p-2 text-sm capitalize">
            {props.name}
          </p>
        </div>
        {isStudent ? (
          <div className="flex justify-between rounded-md bg-100 p-2">
            <span>ID</span>
            <span className="capitalize">{props.rollNumber}</span>
          </div>
        ) : (
          <div className="flex flex-col justify-start gap-2 rounded-md bg-100 p-2">
            <span>Author</span>
            <span className="rounded-md bg-50 p-2 text-sm capitalize">
              {props.author}
            </span>
          </div>
        )}
        {isStudent ? (
          <div className="flex justify-between rounded-md bg-100 p-2">
            <span>Email</span>
            <span className="capitalize">{props.email}</span>
          </div>
        ) : (
          <div className="flex flex-col justify-start gap-2 rounded-md bg-100 p-2">
            <span>Description</span>
            <p className="rounded-md bg-50 p-2 text-sm capitalize">
              {props.description}
            </p>
          </div>
        )}
        {isStudent ? (
          <div className="flex justify-between rounded-md bg-100 p-2">
            <span>Phone Number</span>
            <span className="capitalize">{props.phoneNo}</span>
          </div>
        ) : (
          <div className="flex justify-between rounded-md bg-100 p-2">
            <span>Book Code</span>
            <span className="capitalize">{props.id}</span>
          </div>
        )}
      </div>
    </ModalProvider>
  );
};

export default PrimaryCard;
