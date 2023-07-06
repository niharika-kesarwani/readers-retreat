const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

const books = [
  {
    id: "1",
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    description:
      "This is a book about JavaScript, programming, and the wonders of the digital.",
  },
  {
    id: "2",
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    description:
      "JavaScript: The Definitive Guide is another beginner-friendly book for anyone interested in building powerful web apps.",
  },
];
const students = [
  {
    id: "1",
    name: "Niharika Kesarwani",
    email: "niharikak@gmail.com",
    phoneNo: "1234567890",
  },
  {
    id: "2",
    name: "Vivek Bhatt",
    email: "vivekbhatt@gmail.com",
    phoneNo: "1234567890",
  },
  {
    id: "3",
    name: "Shraddha Vishwakarma",
    email: "shraddhav@gmail.com",
    phoneNo: "1234567890",
  },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

const StudentType = new GraphQLObjectType({
  name: "Student",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNo: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
    student: {
      type: StudentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(students, { id: args.id });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, {});
      },
    },
    students: {
      type: new GraphQLList(StudentType),
      resolve(parent, args) {
        return _.filter(students, {});
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
