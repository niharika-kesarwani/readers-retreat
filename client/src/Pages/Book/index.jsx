import React from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getBooksQuery } from "../../queries/queries";
import "./Book.css";
import PageContainer from "../../Layouts/PageContainer";
import { PrimaryCard } from "../../Components";

const Book = () => {
  const { data, loading, error } = useQuery(getBooksQuery);

  if (loading) {
    return <div>Loading books... </div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }
  return (
    <PageContainer className="flex">
      <div className="flex w-full flex-col gap-8 px-4 py-4 md:flex-row xl:px-0">
        <ul className="card-container w-full">
          {data.books.map((currentBook) => {
            return <PrimaryCard key={currentBook.id} {...currentBook} />;
          })}
        </ul>
      </div>
    </PageContainer>
  );
};

export default graphql(getBooksQuery)(Book);
