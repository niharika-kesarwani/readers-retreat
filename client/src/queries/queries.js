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

const addStudentMutation = gql`
  mutation (
    $studentId: String!
    $studentName: String!
    $studentEmail: String!
    $studentNumber: String!
  ) {
    addStudent(
      rollNumber: $studentId
      name: $studentName
      email: $studentEmail
      phoneNo: $studentNumber
    ) {
      id
      rollNumber
      name
      email
      phoneNo
    }
  }
`;

const deleteBookMutation = gql`
  mutation ($deleteBookId: ID!) {
    deleteBook(id: $deleteBookId) {
      id
      name
      author
      description
    }
  }
`;

const deleteStudentMutation = gql`
  mutation ($deleteStudentId: ID!) {
    deleteStudent(id: $deleteStudentId) {
      id
      rollNumber
      name
      email
      phoneNo
    }
  }
`;

const updateBookMutation = gql`
  mutation (
    $updateBookId: ID!
    $updateBookName: String!
    $updateBookAuthor: String!
    $updateBookDescription: String!
  ) {
    updateBook(
      id: $updateBookId
      name: $updateBookName
      author: $updateBookAuthor
      description: $updateBookDescription
    ) {
      id
      name
      author
      description
    }
  }
`;

const updateStudentMutation = gql`
  mutation (
    $updateStudentId: ID!
    $updateStudentRollNo: String!
    $updateStudentName: String!
    $updateStudentEmail: String!
    $updateStudentPhoneNo: String!
  ) {
    updateStudent(
      id: $updateStudentId
      rollNumber: $updateStudentRollNo
      name: $updateStudentName
      email: $updateStudentEmail
      phoneNo: $updateStudentPhoneNo
    ) {
      id
      rollNumber
      name
      email
      phoneNo
    }
  }
`;

export {
  getBooksQuery,
  getStudentsQuery,
  addBookMutation,
  addStudentMutation,
  deleteBookMutation,
  deleteStudentMutation,
  updateBookMutation,
  updateStudentMutation,
};
