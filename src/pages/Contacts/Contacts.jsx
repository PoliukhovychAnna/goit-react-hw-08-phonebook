import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';

import {
  ContactsTitle,
  ContactContainer,
  PhonebookTitle,
  PhonebookContainer,
  WrapperTask,
} from './Styled.Contacts';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <WrapperTask>
      <PhonebookContainer>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
      </PhonebookContainer>
      <ContactContainer>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />
      </ContactContainer>
    </WrapperTask>
  );
}
