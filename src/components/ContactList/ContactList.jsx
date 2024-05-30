import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({contacts, onDelete}) {

    return (
        <ul className={css.container}>
           {contacts.map(contact => 
           <li className={css.contactList} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete}/>
           </li>
           )}
        </ul>
    )
}
export default ContactList;