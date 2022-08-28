import * as contactsAPI from '../../services/contactsApi';
//import * as contactsActions from './contactsActions';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const axiosGetContacts = createAsyncThunk('contacts/axiosGetContacts', async () => { 
    const contacts = await contactsAPI.getContacts();
    return contacts;
});

export const axiosAddContact = createAsyncThunk('contacts/axiosAddContact', async (data) => { 
    const contact = await contactsAPI.addContact(data);
    return contact;
});

export const axiosDelContact = createAsyncThunk('contacts/axiosDelContact', async (id) => { 
    const contact = await contactsAPI.delContact(id);
    return contact;
});

export const axiosFindContacts = createAsyncThunk('contacts/axiosFindContacts', async (filter) => {
    const contacts = await contactsAPI.findContact(filter);
    return contacts;
});