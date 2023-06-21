import "./App.css";
import SecondaryContainer from "./Components/Containers/SecondaryContainer";
import Header from "./Layouts/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="flex h-[90vh] items-center justify-center gap-16">
        <SecondaryContainer categoryName="student" />
        <SecondaryContainer categoryName="book" />
      </div>
    </div>
  );
}

export default App;
