// import Filter from './components/Filter/Filter';
// import ContactForm from './components/ContactForm';
// import ContactsList from './components/ContactsList';
// import { CSSTransition } from 'react-transition-group';
// import Fade from './components/Fade.module.css';
// import { connect } from 'react-redux';
// import contactsActions from './redux/contacts/contacts-action';

// const App = (props) => {
//   return (
//     <>
//       <CSSTransition
//         in
//         appear={true}
//         timeout={500}
//         classNames={Fade}
//       >
//         <h1>Phonebook</h1>
//       </CSSTransition>
//       <ContactForm onAddContact={props.addContact} />
//       <h2>Contacts</h2>
//       <Filter  />
//       {props.contacts && props.contacts.length > 0 && <ContactsList />} 
//     </>
//   );
//   }

// const mapStateToProps = (state) => ({
//   contacts: state.contacts.contacts,
// })

// const mapDispatchToProps = () => ({
//   addContact: contactsActions.addContact,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
// import Layout from './components/Layout/Layout';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactsList';
import { CSSTransition } from 'react-transition-group';
// import Logo from './components/Logo/Logo';
import operations from './redux/contacts/contacts-operations';
// import Spinner from './components/Spinner/Spinner';
// import Notification from './components/Notification/Notification';
import selectors from './redux/contacts/contacts-selectors';

class App extends Component {
  static propTypes = {
    // contacts: PropTypes.arrayOf(PropTypes.object),
    fetchContacts: PropTypes.func,
    // isLoadingContacts: PropTypes.bool,
    error: PropTypes.object
  };
  
  componentDidMount() {
    this.props.fetchContacts();
  }   
    
  render() {

    return (
      // <Layout>
      //     <Logo />

      //  {this.props.error &&
      //     <Notification
      //         message={`ERROR: ${this.props.error.message}.`} />}
              
      <>
        <ContactForm />
                    
        <Filter />

        {this.props.isLoadingContacts && <h2>Loading...</h2>}
          
        <CSSTransition
          in={this.props.contacts.length > 0}
          timeout={0}
          ommountOnExit>
          <ContactList />
        </CSSTransition>
      </>
    );
  };
};

const mapStateToProps = (state) => ({
  contacts: selectors.getAllContacts(state),
  // isLoadingContacts: selectors.getLoading(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);