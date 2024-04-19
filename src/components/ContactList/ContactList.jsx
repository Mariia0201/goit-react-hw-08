import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";


const ContactList = () => {
 const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contact}>
      {visibleContacts &&
        Array.isArray(visibleContacts) &&
        visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => {
          return (<li key={id} className={css.contactItem}>
            <Contact
              name={name}
              number={number}
              id={id}
            />
          </li>)
 
       
        })}
    </ul>
  );
};

export default ContactList;








