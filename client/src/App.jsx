import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Layouts/Header";
import { Home, Student, Book } from "./Pages";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Student />} />
          <Route path="/books" element={<Book />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
