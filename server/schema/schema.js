const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

// const books = [
//   {
//     id: "1",
//     title: "Eloquent JavaScript",
//     author: "Marijn Haverbeke",
//     description:
//       "This is a book about JavaScript, programming, and the wonders of the digital.",
//   },
//   {
//     id: "2",
//     title: "JavaScript: The Definitive Guide",
//     author: "David Flanagan",
//     description:
//       "JavaScript: The Definitive Guide is another beginner-friendly book for anyone interested in building powerful web apps.",
//   },
// ];
// const lendingHistory = [
//   {
//     id: "1",
//     bookId: "1",
//     studentId: "1",
//     lentDate: "02/06/2023",
//     returnDate: "10/06/2023",
//   },
//   {
//     id: "2",
//     bookId: "2",
//     studentId: "2",
//     lentDate: "01/07/2023",
//     returnDate: "06/07/2023",
//   },
//   {
//     id: "3",
//     bookId: "1",
//     studentId: "3",
//     lentDate: "15/06/2023",
//     returnDate: "25/06/2023",
//   },
// ];
// const students = [
//   {
//     id: "1",
//     rollNumber: 1,
//     name: "Niharika Kesarwani",
//     email: "niharikak@gmail.com",
//     phoneNo: "1234567890",
//   },
//   {
//     id: "2",
//     rollNumber: 2,
//     name: "Vivek Bhatt",
//     email: "vivekbhatt@gmail.com",
//     phoneNo: "1234567890",
//   },
//   {
//     id: "3",
//     rollNumber: 3,
//     name: "Shraddha Vishwakarma",
//     email: "shraddhav@gmail.com",
//     phoneNo: "1234567890",
//   },
// ];

const LendingHistoryType = new GraphQLObjectType({
  name: "LendingHistory",
  fields: () => ({
    id: { type: GraphQLID },
    book: {
      type: BookType,
      resolve(parent, args) {
        // console.log(parent);
        // return _.find(books, { id: parent.bookId });
      },
    },
    student: {
      type: StudentType,
      resolve(parent, args) {
        // console.log(parent);
        // return _.find(students, { id: parent.studentId });
      },
    },
    lentDate: { type: GraphQLString },
    returnDate: { type: GraphQLString },
  }),
});

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    description: { type: GraphQLString },
    lendingHistory: {
      type: new GraphQLList(LendingHistoryType),
      resolve(parent, args) {
        // return _.filter(lendingHistory, { bookId: parent.id });
      },
    },
  }),
});

const StudentType = new GraphQLObjectType({
  name: "Student",
  fields: () => ({
    id: { type: GraphQLID },
    rollNumber: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNo: { type: GraphQLString },
    lendingHistory: {
      type: new GraphQLList(LendingHistoryType),
      resolve(parent, args) {
        // return _.filter(lendingHistory, { studentId: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(books, { id: args.id });
      },
    },
    student: {
      type: StudentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(students, { id: args.id });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return _.filter(books, {});
      },
    },
    students: {
      type: new GraphQLList(StudentType),
      resolve(parent, args) {
        // return _.filter(students, {});
      },
    },
    bookLendingHistory: {
      type: new GraphQLList(LendingHistoryType),
      resolve(parent, args) {
        // return _.filter(lendingHistory, {});
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
