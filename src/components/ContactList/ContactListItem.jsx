import {
  Button,
  ContactItem,
  ContactTxt,
} from 'components/Style/Element.styled';
import { FaUserAlt } from 'react-icons/fa';

import { useDeleteContactMutation } from '../../redux/contactsApi';

export const ContactListItem = ({ id, number, userName }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ContactItem key={id}>
      <FaUserAlt />
      <ContactTxt>
        {userName} : {number}
      </ContactTxt>
      <Button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </Button>
    </ContactItem>
  );
};
