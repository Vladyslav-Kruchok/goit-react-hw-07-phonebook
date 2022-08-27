import React, {useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";
import { ContactForm } from "../components/ContactForm";
import { ContactList } from "../components/ContactList";
import { Filter } from "../components/Filter";
import viewContacts from '../helpers/viewContacts';
import addId from '../helpers/addId';
import * as contactsOperations from "../redux/contacts/contactsOperations";

export const App = () => {
  const dispatch = useDispatch();
  //store
  const contacts = useSelector(state => state.contacts.entities);
  //const stateFilterValue = useSelector(state => state.filter);
  useEffect(() => { 
    dispatch(contactsOperations.axiosContacts());
  }, [dispatch]);
  //#region ON_FUNC #
  //(import) Add to store Data from ContactForm
  const extFormOnSubmit = (data) => {
    //typeof=object
    //data ==>> {name: 'Dustin Beck', number: '+1 (886) 951-7896'}
    const dataPlusId = addId(data);
    //dispatch(addItem(dataPlusId));
    //dispatch(contactsOperations.axiosContacts());
  }
  //del item in ContactList
  const extListOnClick = (e) => {
    const id = e.target.id;
    //dispatch(removeItem(id));
  };
  //update state filter
  const extInputOnInput = (e) => {
    //dispatch(addFilter(e.target.value));
  };
  //#endregion #

    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={extFormOnSubmit } />
        <h2>Contacts</h2>
        <Filter onInput={extInputOnInput} />
        
        {contacts && <ContactList 
          contacts={contacts}
          onClick={extListOnClick} />}
      </div>
    );
};