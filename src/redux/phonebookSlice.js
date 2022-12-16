import { INITIAL_CONTACTS } from 'data/contacts';

const { createSlice } = require('@reduxjs/toolkit');

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: INITIAL_CONTACTS,
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      console.log(action);
      console.log(action.payload);
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  phonebookSlice.actions;
