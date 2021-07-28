import PropTypes from "prop-types";
import s from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Fade from '../Fade.module.css';
import { connect } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import selectors from '../../redux/contacts/contacts-selectors';


const ContactList = ({ contacts, onRemoveContact }) => (
  <TransitionGroup component='ul'>
    {contacts && contacts.length > 0 && contacts.map(({ id, name, number }) =>
      <CSSTransition
        key={id}
        timeout={500}
        classNames={Fade}
      >
        <li className={s.contactItem} key={id}>
          {`${name} : ${number}`}
          {
            <button
              className={s.deleteButton}
              type='button'
              name='delete'
              onClick={() => onRemoveContact(id)}
            >
              delete contact
            </button>
          }
        </li>
      </CSSTransition>
    )}
  </TransitionGroup>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
}

// const getVisibleContacts = (allContacts, contactFilter) => {
//   const normalizedFilter = contactFilter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter),
//   );
// };

const mapStateToProps = ( state ) => ({
  contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(operations.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
