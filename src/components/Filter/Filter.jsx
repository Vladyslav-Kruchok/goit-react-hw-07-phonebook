import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Filter.module.css";
import { contactsOperations } from "../../redux/contacts";

export const Filter = () => {
    const dispatch = useDispatch();
    
    const filterOnInput = (e) => { 
        const filterValue = e.target.value;
        dispatch(contactsOperations.axiosFindContacts(filterValue));
    };
    return (
        <label className={styles.label}>
            <span className={styles.span}>Find contacts by name</span>
            <input className={styles.input} type="text" id="search-box" onInput={filterOnInput} />
        </label>
    );
};