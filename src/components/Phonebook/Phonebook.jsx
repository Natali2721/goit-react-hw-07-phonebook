import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebookSlice';
import { nanoid } from 'nanoid';
import ButtonAdd from 'components/ContactForm/ButtonAdd';
import ContactForm from 'components/ContactForm/ContactForm';
import InputName from 'components/ContactForm/InputName';
import InputTel from 'components/ContactForm/InputTel';
import { LabelContact } from 'components/ContactForm/LabelContact';

export const Phonebook = () => {
  const contacts = useSelector(state => state.contacts);
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const dispatch = useDispatch();

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

  const addContactHandle = data => {
    const id = nanoid(7);
    data.id = id;
    console.log(data);
    contacts.filter(contact => contact.userName === data.userName).length > 0
      ? alert(`${userName} is already in contacts.`)
      : dispatch(addContact({ userName, number, id }));
  };

  const clickOnBtnAdd = e => {
    e.preventDefault();
    addContactHandle({ userName, number });
    reset();
    // console.log(this.state);
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
