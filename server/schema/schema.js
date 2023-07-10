const graphql = require("graphql");
const _ = require("lodash");
const Books = require("../models/books");
const Students = require("../models/students");
const LendingHistory = require("../models/lendingHistory");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

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
    name: { type: GraphQLString },
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
    rollNumber: { type: GraphQLID },
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

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        author: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        const book = new Books({
          name: args.name,
          author: args.author,
          description: args.description,
        });
        return book.save();
      },
    },

    addStudent: {
      type: StudentType,
      args: {
        rollNumber: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phoneNo: { type: GraphQLString },
      },
      resolve(parent, args) {
        const student = new Students({
          rollNumber: args.rollNumber,
          name: args.name,
          email: args.email,
          phoneNo: args.phoneNo,
        });
        return student.save();
      },
    },

    addLendingHistory: {
      type: LendingHistoryType,
      args: {
        bookId: { type: GraphQLID },
        studentRoll: { type: GraphQLID },
        lentDate: { type: GraphQLString },
        returnDate: { type: GraphQLString },
      },
      resolve(parent, args) {
        const lendingHistory = new LendingHistory({
          bookId: args.bookId,
          studentRoll: args.studentRoll,
          lentDate: args.lentDate,
          returnDate: args.returnDate,
        });
        console.log(lendingHistory);
        return lendingHistory.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
