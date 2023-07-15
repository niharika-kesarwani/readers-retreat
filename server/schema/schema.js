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
  GraphQLNonNull,
} = graphql;

const LendingHistoryType = new GraphQLObjectType({
  name: "LendingHistory",
  fields: () => ({
    id: { type: GraphQLID },
    book: {
      type: BookType,
      resolve(parent, args) {
        return Books.findById(parent.bookId);
      },
    },
    student: {
      type: StudentType,
      resolve(parent, args) {
        return Students.findOne({ rollNumber: parent.studentRoll });
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
        return LendingHistory.find({ bookId: parent.id });
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
        return LendingHistory.find({ studentRoll: parent.rollNumber });
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
        return Books.findById(args.id);
      },
    },
    student: {
      type: StudentType,
      args: { rollNumber: { type: GraphQLString } },
      resolve(parent, args) {
        console.log(args);
        return Students.findOne({ rollNumber: args.rollNumber });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Books.find({});
      },
    },
    students: {
      type: new GraphQLList(StudentType),
      resolve(parent, args) {
        return Students.find({});
      },
    },
    bookLendingHistory: {
      type: new GraphQLList(LendingHistoryType),
      resolve(parent, args) {
        return LendingHistory.find({});
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
        name: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
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
        rollNumber: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phoneNo: { type: new GraphQLNonNull(GraphQLString) },
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
        bookId: { type: new GraphQLNonNull(GraphQLID) },
        studentRoll: { type: new GraphQLNonNull(GraphQLString) },
        lentDate: { type: new GraphQLNonNull(GraphQLString) },
        returnDate: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const lendingHistory = new LendingHistory({
          bookId: args.bookId,
          studentRoll: args.studentRoll,
          lentDate: args.lentDate,
          returnDate: args.returnDate,
        });
        return lendingHistory.save();
      },
    },

    deleteBook: {
      type: BookType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Books.findByIdAndRemove(args.id);
      },
    },

    deleteStudent: {
      type: StudentType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Students.findByIdAndRemove(args.id);
      },
    },

    updateBook: {
      type: BookType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        name: { type: GraphQLString },
        author: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Books.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              author: args.author,
              description: args.description,
            },
          },
          { new: true }
        );
      },
    },

    updateStudent: {
      type: StudentType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        rollNumber: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phoneNo: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Students.findByIdAndUpdate(
          args.id,
          {
            $set: {
              rollNumber: args.rollNumber,
              name: args.name,
              email: args.email,
              phoneNo: args.phoneNo,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
