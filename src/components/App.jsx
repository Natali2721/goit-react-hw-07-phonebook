//import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Box } from './Box/Box';
import { H1, H2 } from './Title/Title';
import { ContactList } from './ContactList/ContactList';
import { Phonebook } from './Phonebook/Phonebook';
import { Filter } from './Filter/Filter';
import { P } from './Style/Element.styled';
//const LS_KEY = 'contacts';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);

  //useEffect(() => {
  //  localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  //}, [contacts]);

  return (
    <Box as="main" px={5}>
      <H1 title="Phonebook" />
      <Phonebook />
      {contacts.length > 0 ? (
        <>
          <H2 title="Contacts" />
          <Filter title="Find contact by name" />
          <ContactList />
        </>
      ) : (
        <P>Phonebook is empty</P>
      )}
    </Box>
  );
};
