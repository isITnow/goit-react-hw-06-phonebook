import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './reducers/contacts-reduser';
import { filterReducer } from './reducers/filter-reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReducer,
  },
});
