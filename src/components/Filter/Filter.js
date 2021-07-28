import PropTypes from "prop-types";
import s from './Filter.module.css';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-action';
import selectors from '../../redux/contacts/contacts-selectors';
// import operations from '../../redux/contacts/contacts-operations';

const Filter = ({ value, onChangeFilter }) => (
    <div className={s.filterContainer}>
      Find contacts by name
      <input
        className={s.filterContainerInput}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
  // contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  value: selectors.getFilter(state),
  contacts: selectors.getAllContacts(state),
})

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(contactsActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
