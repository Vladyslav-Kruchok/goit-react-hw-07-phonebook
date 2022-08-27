import axios from 'axios';

axios.defaults.baseURL = 'https://630098a69a1035c7f8f4c852.mockapi.io/api/v1';

export async function getContacts() { 
    const { data } = await axios.get('/contacts');
    return data;
};

export async function getContact(contactId) { 
        const { data } = await axios.get(`/contacts/${contactId}`);
    return data;
};