import React from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getBooksQuery } from "../../queries/queries";

const Book = () => {
  const { data, loading, error } = useQuery(getBooksQuery);

  if (loading) {
    return <div>Loading books... </div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  console.log(data);

  return (
    <div>
      {data.books.map((book) => (
        <div key={book.id}>{book.name}</div>
      ))}
    </div>
  );
};

export default graphql(getBooksQuery)(Book);
