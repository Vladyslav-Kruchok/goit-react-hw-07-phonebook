import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { ContactForm } from "../components/ContactForm";
import { ContactList } from "../components/ContactList";
import { Filter } from "./Filter";
import { Loader } from "./Loader/Loader";

import {contactsOperations, contactsSelectors} from "../redux/contacts";

export const App = () => {
  const dispatch = useDispatch();
  //store
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.isLoading);
  const filter = useSelector(contactsSelectors.filter); 
  
  const update = (data, status, filter = '') => { 
    // get all contacts
    if (data === status && !filter) {
      dispatch(contactsOperations.axiosGetContacts());
    };
    // get filtered contacts by filter
    if (data === status && filter) {
      dispatch(contactsOperations.axiosFindContacts(filter));
    };
  };
  
  //get all contactsxnj
  useEffect(() => { 
    dispatch(contactsOperations.axiosGetContacts());
  }, [dispatch]);
  
  //#region FUNC #
  //(import) Add to store Data from ContactForm
  const extFormOnSubmit = (contact) => {
    //const contact ={name: 'Dustin Beck', number: '+1 (886) 951-7896'}
    let isContact;
    dispatch(contactsOperations.axiosFindContacts(contact.name)).then(data => {
      isContact = !!data.payload.length;
        if (!isContact) {
          dispatch(contactsOperations.axiosAddContact(contact)).then(request => {
              update(request.meta.requestStatus, "fulfilled");
            });
        } else {
          alert(`${contact.name} is already in a contact`);
          update(true, true);
          return;
        }
      });
  }
  
  //del contact, and update (all contacts)
  const extListOnClick = (e) => {
    const id = e.target.id;
    dispatch(contactsOperations.axiosDelContact(id)).then(data => {
        update(data.meta.requestStatus, "fulfilled", filter);
      });
  };
  
  // get filtered contacts by filter and update (filtered contacts)
  const extInputOnInput = (e) => {
    const filterValue = e.target.value;
    dispatch(contactsOperations.axiosFindContacts(filterValue)).then(data => {
      update(data.meta.requestStatus, "fulfilled", filterValue);
      });
  };
  //#endregion #

    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={extFormOnSubmit } />
        <h2>Contacts</h2>
        <Filter onInput={extInputOnInput} />
        {isLoading && <Loader/>}
        {contacts && <ContactList 
          contacts={contacts}
          onClick={extListOnClick} />}
      </div>
    );
};