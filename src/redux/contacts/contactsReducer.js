import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { axiosContacts } from "./contactsOperations";

const entities = createReducer([], {
[axiosContacts.fulfilled]: (_, action) => action.payload
});

const isLoading = createReducer(false, {
    [axiosContacts.pending]: () => true,
    [axiosContacts.fulfilled]: () => false,
    [axiosContacts.rejected]: () => false
});

const error = createReducer(null, {
    [axiosContacts.pending]: () => null,
    [axiosContacts.rejected]: (_, action) => action.payload
});

export default combineReducers({
    entities,
    isLoading,
    error
});