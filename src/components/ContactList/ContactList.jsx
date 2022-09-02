import React , {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ListItem } from "../ListItem";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { Loader } from "../Loader/Loader";

export const ContactList = () => {
    const dispatch = useDispatch();
    //store
    const contacts = useSelector(contactsSelectors.getContacts);
    const filter = useSelector(contactsSelectors.filter); 
    const isLoading = useSelector(contactsSelectors.isLoading);

    //get all contacts
    useEffect(() => { 
        dispatch(contactsOperations.axiosGetContacts());
    }, [dispatch]);

    const onClickDel = (e) => { 
        const id = e.target.id;
        dispatch(contactsOperations.axiosDelContact(id)).then(data => {
            dispatch(contactsOperations.axiosFindContacts(filter));
        });
    };
    return (
        <>
            {isLoading && <Loader/>}
            <ul>
                {
                    contacts && contacts.map(({ id, name, number }) => 
                        <ListItem onClick={onClickDel} key={id} id={id} name={name} number={number} />
                    )
                }
            </ul>
        </>
    );
};