import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as contactsActions from './contactsActions';

const entities = createReducer([], {
[contactsActions.axiosContactsSuccess]: (_, action) => action.payload
});

const isLoading = createReducer(false, {
    [contactsActions.axiosContactsRequest]: () => true,
    [contactsActions.axiosContactsSuccess]: () => false,
    [contactsActions.axiosContactsError]: () => false
});

const error = createReducer(null, {
    [contactsActions.axiosContactsRequest]: () => null,
    [contactsActions.axiosContactsError]: (_, action) => action.payload
});

export default combineReducers({
    entities,
    isLoading,
    error
});