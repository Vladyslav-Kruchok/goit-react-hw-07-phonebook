import { createAction } from '@reduxjs/toolkit';

//pending
export const axiosContactsRequest = createAction('contacts/axiosContactsRequest');
//fulfilled
export const axiosContactsSuccess = createAction('contacts/axiosContactsSuccess');
//rejected
export const axiosContactsError = createAction('contacts/axiosContactsError');