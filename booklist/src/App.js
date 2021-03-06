import BookContextProvider from "./contexts/BookContext";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import NewBookFrom from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <NewBookFrom />
      </BookContextProvider>
    </div>
  );
}

export default App;
