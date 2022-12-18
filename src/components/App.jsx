import { Box } from './Box/Box';
import { H1, H2 } from './Title/Title';
import { ContactList } from './ContactList/ContactList';
import { Phonebook } from './Phonebook/Phonebook';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Box as="main" px={5}>
      <H1 title="Phonebook" />
      <Phonebook />

      <H2 title="Contacts" />
      <Filter title="Find contact by name" />
      <ContactList />
    </Box>
  );
};
