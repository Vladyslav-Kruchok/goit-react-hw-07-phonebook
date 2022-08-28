import axios from 'axios';

axios.defaults.baseURL = 'https://630098a69a1035c7f8f4c852.mockapi.io/api/v1';

export async function getContacts() { 
    const { data } = await axios.get('/contacts');
    return data;
};

export async function addContact(contacts) { 
    const { data } = await axios.post(`/contacts/`, contacts);
    return data;
};

export async function delContact(contactId) { 
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
};

export async function findContact(filter) { 
    const { data } = await axios.get(`/contacts?filter=${filter}`);
    return data;
};
