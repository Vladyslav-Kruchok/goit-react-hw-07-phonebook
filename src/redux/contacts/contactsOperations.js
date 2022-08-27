import * as contactsAPI from '../../services/contactsApi';
import * as contactsActions from './contactsActions';

export const axiosContacts = () => async dispatch => { 
    dispatch(contactsActions.axiosContactsRequest());
    try {
        const contacts = await contactsAPI.getContacts();
        dispatch(contactsActions.axiosContactsSuccess(contacts));
    } catch (error) {
        dispatch(contactsActions.axiosContactsError(error));
    }
};