import { useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsApi';
import { nanoid } from 'nanoid';
import ButtonAdd from 'components/ContactForm/ButtonAdd';
import ContactForm from 'components/ContactForm/ContactForm';
import InputName from 'components/ContactForm/InputName';
import InputTel from 'components/ContactForm/InputTel';
import { LabelContact } from 'components/ContactForm/LabelContact';

export const Phonebook = () => {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setUserName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setUserName('');
    setNumber('');
  };

  const clickOnBtnAdd = async e => {
    e.preventDefault();

    try {
      data.find(contact => contact.userName === userName)
        ? toast.error(`${userName} is already in contacts.`)
        : await addContact({ userName, number });
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
    <>
      <ContactForm onSubmit={clickOnBtnAdd}>
        <LabelContact title="Name" htmlFor={nameInputId}>
          <InputName value={userName} onChange={handleChange} />
        </LabelContact>
        <LabelContact title="Number" htmlFor={numberInputId}>
          <InputTel value={number} onChange={handleChange} />
        </LabelContact>
        <ButtonAdd text="Add contact" />
      </ContactForm>
    </>
  );
};
