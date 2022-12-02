import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem.jsx';
import { List } from './ContactList.styled.js';

export const ContactList = ({
  contacts,
  value,
  filteredContacts,
  removeContact,
}) => {
  return (
    <>
      <List>
        {value ? (
          <ContactListItem
            removeContact={removeContact}
            contacts={filteredContacts}
          />
        ) : (
          <ContactListItem removeContact={removeContact} contacts={contacts} />
        )}
      </List>
    </>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
