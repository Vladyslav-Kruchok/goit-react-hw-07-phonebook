import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { axiosGetContacts, axiosFindContacts } from "./contactsOperations";

const entities = createReducer([], {
    [axiosGetContacts.fulfilled]: (_, action) => action.payload,
    [axiosFindContacts.fulfilled]: (_, action) => action.payload
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
    [axiosFindContacts.fulfilled]: (state, action) => action.meta.arg
});
export default combineReducers({
    entities,
    isLoading,
    error,
    filter
});