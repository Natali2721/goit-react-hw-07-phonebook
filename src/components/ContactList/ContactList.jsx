import {
  Button,
  ContactItem,
  Contacts,
  ContactTxt,
} from 'components/Style/Element.styled';
import { FaUserAlt } from 'react-icons/fa';
import { deleteContact } from 'redux/phonebookSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  const searchFilter = useSelector(state => state.filter);

  const serchFilterToLowerCase = searchFilter.toLowerCase();

  const getVisibleContacts = () => {
    if (searchFilter !== '') {
      return contacts.filter(({ userName }) =>
        userName.toLowerCase().includes(serchFilterToLowerCase)
      );
    }
    return contacts;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Contacts>
      {visibleContacts.map(({ userName, number, id }) => {
        return (
          <ContactItem key={id}>
            <FaUserAlt />
            <ContactTxt>
              {userName} : {number}
            </ContactTxt>
            <Button type="button" onClick={() => deleteContactById(id)}>
              Delete
            </Button>
          </ContactItem>
        );
      })}
    </Contacts>
  );
};
