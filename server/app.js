if (process.env.NODE_ENV !== "production") {
  //for getting env variables
  require("dotenv").config();
}

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow cross-origin requests
app.use(cors());

const PORT = process.env.PORT || 4000;

mongoose.connect(
  "mongodb+srv://shraddhav1935:jaiHanuman@cluster0.vrcuvca.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.connection.once("open", () => {
  console.log("connected to db");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
