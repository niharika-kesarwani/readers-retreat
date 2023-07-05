import "./App.css";
import SecondaryContainer from "./Components/Containers/SecondaryContainer";
import Header from "./Layouts/Header";
import AddCircleIcon from "@mui/icons-material/AddCircle";


function App() {
  return (
    <div>
      <Header />
      <div className="flex h-[90vh] items-center justify-center gap-16">
        <SecondaryContainer categoryName="student">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-2xl font-semibold uppercase">add student</h1>
            <AddCircleIcon sx={{ fontSize: "50px" }} />
          </div>
        </SecondaryContainer>
        <SecondaryContainer categoryName="book" >
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-2xl font-semibold uppercase">add book</h1>
            <AddCircleIcon sx={{ fontSize: "50px" }} />
          </div>
        </SecondaryContainer>
      </div>
    </div>
  );
}

export default App;
