import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { Contact } from '../ContactRender/ContactRender.jsx';

export function ContactList({ contacts, onDeleteContact = () => {} }) {
  return (
    <ul className={css.contactList}>
      {contacts.length > 0 &&
        contacts.map(contact => {
          return (
            <Contact
              contact={contact}
              key={contact.id}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string,
    }).isRequired
  ).isRequired,
};
