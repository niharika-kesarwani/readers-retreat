import React, { useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getBooksQuery } from "../../queries/queries";
import "./Book.css";
import PageContainer from "../../Layouts/PageContainer";
import { PrimaryCard, EmptyCard, Loader } from "../../Components";
import InputSearch from "../../Components/Inputs/InputSearch";

const Book = () => {
  const { data, loading, error } = useQuery(getBooksQuery);
  const [inputText, setInputText] = useState("");

  const booksData = useMemo(() => {
    if (inputText) {
      return data?.books.filter(
        (book) =>
          book.name.toLowerCase().includes(inputText.toLowerCase()) ||
          book.author.toLowerCase().includes(inputText.toLowerCase()) ||
          book.description.toLowerCase().includes(inputText.toLowerCase())
      );
    } else {
      return data?.books;
    }
  }, [data, inputText]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }
  return (
    <PageContainer className="m-4 flex flex-col items-center gap-4">
      <InputSearch searchName="Books" setInputText={setInputText} />
      <div className="flex w-full flex-col gap-8 px-4 py-4 md:flex-row xl:px-0">
        <ul
          className={
            data.books.length == 0
              ? `flex w-full`
              : `card-container w-full justify-items-center`
          }
        >
          {data.books.length !== 0 ? (
            booksData.length ? (
              booksData.map((currentBook) => {
                return <PrimaryCard key={currentBook.id} {...currentBook} />;
              })
            ) : (
              <p className="text-xl">
                No Book with title/author/description of{" "}
                <strong>{inputText}</strong> found
              </p>
            )
          ) : (
            <EmptyCard
              addBtnText="Add Books"
              emptyCardTitle="bookEmpty"
              emptyCardDescription="No Book Data"
              emptyCardUrl="https://res.cloudinary.com/duqsyuriy/image/upload/v1689418626/NoBook_m0phgt.svg"
            />
          )}
        </ul>
      </div>
    </PageContainer>
  );
};

export default graphql(getBooksQuery)(Book);
