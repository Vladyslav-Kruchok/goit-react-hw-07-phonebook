import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
import { pokemonApi } from './rtk';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        (pokemonApi.middleware)
    ]
});