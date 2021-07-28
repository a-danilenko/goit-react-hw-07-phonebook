import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; 
import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-reduser';

const middleware = [
  ...getDefaultMiddleware(),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
})

export default store;
