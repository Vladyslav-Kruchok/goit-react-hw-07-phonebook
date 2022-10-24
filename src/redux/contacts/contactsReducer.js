import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { axiosGetContacts } from "./contactsOperations";
import * as contactsActions from './contactsActions';

const entities = createReducer([], {
    [axiosGetContacts.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
    [axiosGetContacts.pending]: () => true,
    [axiosGetContacts.fulfilled]: () => false,
    [axiosGetContacts.rejected]: () => false
});

const error = createReducer(null, {
    [axiosGetContacts.pending]: () => null,
    [axiosGetContacts.rejected]: (_, action) => action.payload
});

const filter = createReducer('', {
    [contactsActions.addFilter]: (_, action) => {
        return action.payload;
    }
});

export default combineReducers({
    entities,
    isLoading,
    error,
    filter
});