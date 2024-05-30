import { useState, useEffect } from 'react';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from "../ContactList/ContactList"

function App() {
const InitialContacts = [

  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},

]

const [contacts, setContacts] = useState(() => {
  const savedContacts = localStorage.getItem("saved-contact");
  return savedContacts ? JSON.parse(savedContacts) : InitialContacts;
},);

useEffect(() => {
  localStorage.setItem("saved-contact", JSON.stringify(contacts));
  console.log(contacts);
}, [contacts]);

const addContact = (newContact) => {
  setContacts((prevContacts) => {
    
return [...prevContacts, newContact];
});
};

const [filter, setFilter] = useState('');

const deleteContact = (contactId) => {
  setContacts((prevContacts) => {
    return prevContacts.filter(contact => contact.id !== contactId);
  })
}
const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

return (

<div className={css.container}>

  <h1>Phonebook</h1>
    <ContactForm onAdd={addContact}/>
    <SearchBox value={filter} onFilter={setFilter}/>
    <ContactList  contacts={filterContacts} onDelete={deleteContact}/> 

</div>

)
}
export default App;