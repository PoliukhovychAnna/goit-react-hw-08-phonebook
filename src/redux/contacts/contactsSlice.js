import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from 'redux/auth/operations';
import {
  handleGetAllContactsFulfilled,
  handleAddContactFulfilled,
  handleRejected,
  handlePending,
  handleDeleteContactFulfilled,
  handleLogOutFulfilled,
} from '../handlers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleGetAllContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleLogOutFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
