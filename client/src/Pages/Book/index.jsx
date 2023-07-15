import React from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getBooksQuery } from "../../queries/queries";
import "./Book.css";
import PageContainer from "../../Layouts/PageContainer";
import { PrimaryCard, EmptyCard, Loader } from "../../Components";

const Book = () => {
  const { data, loading, error } = useQuery(getBooksQuery);

  if (loading) {
    return (
      <div className="w-full">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }
  return (
    <PageContainer className="flex">
      <div className="flex w-full flex-col gap-8 px-4 py-4 md:flex-row xl:px-0">
        <ul
          className={
            data.books.length == 0 ? `flex w-full` : `card-container w-full`
          }
        >
          {data.books.length !== 0 ? (
            data.books.map((currentBook) => {
              return <PrimaryCard key={currentBook.id} {...currentBook} />;
            })
          ) : (
            <EmptyCard
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
