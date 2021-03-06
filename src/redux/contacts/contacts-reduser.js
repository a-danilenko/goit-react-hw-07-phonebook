import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter,
  clearError
} from './contacts-action';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: null,
};

const contacts = createReducer(initialState.contacts, {
[fetchContactSuccess]: (_, { payload }) => payload,
[addContactSuccess]: (state, { payload }) => [...state, payload],
[removeContactSuccess]: (state, { payload }) =>
  state.filter(({ id }) => id !== payload),
});

const loading = createReducer(initialState.loading, {
[fetchContactRequest]: () => true,
[fetchContactSuccess]: () => false,
[fetchContactError]: () => false,
[addContactRequest]: () => true,
[addContactSuccess]: () => false,
[addContactError]: () => false,
[removeContactRequest]: () => true,
[removeContactSuccess]: () => false,
[removeContactError]: () => false,
});

const filter = createReducer(initialState.filter, {
[changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(initialState.error, {
[fetchContactError]: (_, { payload }) => payload,
[addContactError]: (_, { payload }) => payload,
[removeContactError]: (_, { payload }) => payload,
[clearError]: () => null,
});

export default combineReducers({
contacts,
filter,
loading,
error
});
