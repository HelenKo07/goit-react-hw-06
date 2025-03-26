import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchForm from "./components/SearchBox/SearchBox";

function App() {
  return (
    <>
      <ContactForm />
      <SearchForm />
      <ContactList />
    </>
  );
}

export default App;
