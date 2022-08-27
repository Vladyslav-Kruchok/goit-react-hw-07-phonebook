import * as contactsAPI from '../../services/contactsApi';
//import * as contactsActions from './contactsActions';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const axiosContacts = createAsyncThunk('contacts/axiosContacts', async () => { 
    const contacts = await contactsAPI.getContacts();
    return contacts;
});