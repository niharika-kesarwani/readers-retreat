import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Layouts/Header";
import { Home, Student, Book } from "./Pages";
import { Toaster } from "react-hot-toast";

const client = new ApolloClient({
  uri: "https://readers-retreat-server.onrender.com/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="">
        <Toaster
          position="top-center"
          reverseOrder={false}
          containerStyle={{ top: "10%" }}
          toastOptions={{ style: { maxWidth: 500 } }}
        />
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
