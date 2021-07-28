import { createSelector } from '@reduxjs/toolkit';

// const getLoading = state => state.phoneBook.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts;

const getError = state => state.contacts.error;

// const getVisibleContacts = createSelector(
//     [getAllContacts, getFilter],
//     (contacts, filter) => { 
//         const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//         name.toLowerCase().includes(normalizedFilter),
//     );
//     },
// );

const getVisibleContacts = state => {
    const contacts = getAllContacts(state);
    const filter = getFilter(state);
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
};

const selectors = {
    // getLoading,
    getFilter,
    getVisibleContacts,
    getAllContacts,
    getError
};

export default selectors;