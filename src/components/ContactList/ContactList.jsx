import {
  Button,
  ContactItem,
  Contacts,
  ContactTxt,
} from 'components/Style/Element.styled';
import { FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsApi';

export const ContactList = () => {
  const { data } = useGetContactsQuery();
  const searchFilter = useSelector(state => state.filter);
  const serchFilterToLowerCase = searchFilter.toLowerCase();

  const deleteContact = useDeleteContactMutation();

  const getVisibleContacts = () => {
    if (searchFilter !== '') {
      return data.filter(({ userName }) =>
        userName.toLowerCase().includes(serchFilterToLowerCase)
      );
    }
    return data;
  };

  const visibleContacts = getVisibleContacts();

  console.log(visibleContacts);

  return (
    <Contacts>
      {visibleContacts &&
        visibleContacts.map(contact => {
          return (
            <ContactItem key={contact.id}>
              <FaUserAlt />
              <ContactTxt>
                {contact.userName} : {contact.number}
              </ContactTxt>
              <Button type="button" onClick={() => deleteContact(contact.id)}>
                Delete
              </Button>
            </ContactItem>
          );
        })}
    </Contacts>
  );
};
