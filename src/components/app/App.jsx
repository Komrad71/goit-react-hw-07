import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import css from "./App.module.css";
import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <div className={css.contactsWrapper}>
        <SearchBox />
        <ContactList />
      </div>
    </section>
  );
};

export default App;