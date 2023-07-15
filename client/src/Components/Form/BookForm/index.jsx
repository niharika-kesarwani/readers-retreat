import React, { useState } from "react";
import {
  InputTextLabel,
  InputTextVariant,
  ContainedActionBtn,
  OutlinedActionBtn,
} from "../../../Components";

const BookForm = (props) => {
  const { isEditBook, closeBookForm } = props;
  // BOOK INPUT DATA:
  const [bookData, setBookData] = useState({
    bookTitle: props?.isEditBook ? props.name : "",
    bookAuthor: props?.isEditBook ? props.author : "",
    bookDescription: props?.isEditBook ? props.description : "",
    bookCode: props?.isEditBook ? props.id : "",
  });

  // HANDLE BOOK DATA:
  const handleBookData = (event) => {
    const { name, value } = event.target;
    setBookData((prevBookData) => {
      return { ...prevBookData, [name]: value };
    });
  };

  // HANDLE ADD BOOK:
  const handleAddBookSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(bookData);
    if (isEditBook) {
      props.closeEdit();
    } else {
      closeBookForm();
    }
  };
  return (
    <form className="flex flex-col gap-7" onSubmit={handleAddBookSubmit}>
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
          actionHandler={(event) => {
            event.stopPropagation();
            if (isEditBook) {
              props.closeEdit();
            } else {
              closeBookForm();
            }
          }}
          actionType="button"
        />
      </div>
    </form>
  );
};

export default BookForm;
