import { GlobalStyle } from '../GlobalStyle';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import ContactList from '../ContactList';

import Filter from '../Filter';
import Form from '../Form';

import { Container, H2, H1 } from './App.styled';



const contactsJson = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? contactsJson;
  });
  const [filter, setFilter] = useState('')



  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
  

  const addContacts = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.find(contact => contact.name === name)
      ? alert(name + '   This contact already exists!')
      : setContacts( [newContact, ...contacts]);
  };

  const contactFilter = () => {
    const lowerRegister = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerRegister)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

   const filterByName = e => {
  setFilter(e.currentTarget.value );
  };


   
    return (
      <>
        <Container>
          <H1>Phonebook</H1>
          <Form onSubmit={addContacts} />

          <H2>Contacts</H2>
          <Filter value={filter} onChange={filterByName} />
          <ContactList
            contacts={contactFilter()}
            deleteContacts={deleteContact}
          />
        </Container>
        <GlobalStyle />
      </>
    );
  }

