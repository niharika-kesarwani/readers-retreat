import { gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      id
      name
      author
      description
    }
  }
`;

const getStudentsQuery = gql`
  {
    students {
      id
      rollNumber
      name
      email
      phoneNo
    }
  }
`;

const addBookMutation = gql`
  mutation (
    $bookTitle: String!
    $bookAuthor: String!
    $bookDescription: String!
  ) {
    addBook(
      name: $bookTitle
      author: $bookAuthor
      description: $bookDescription
    ) {
      id
      name
      author
      description
    }
  }
`;

export { getBooksQuery, getStudentsQuery, addBookMutation };
