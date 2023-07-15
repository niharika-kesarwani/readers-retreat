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

export { getBooksQuery, getStudentsQuery };
