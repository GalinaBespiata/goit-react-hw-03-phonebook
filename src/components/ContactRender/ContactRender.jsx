import PropTypes from 'prop-types';
import css from '../ContactRender/ContactRender.module.css';

export function Contact({ contact, onDeleteContact = () => {} }) {
  return (
    <li className={css.contact}>
      {contact.name} : {contact.number}
      <button
        className={css.textContact}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  contacts: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  }),
};
