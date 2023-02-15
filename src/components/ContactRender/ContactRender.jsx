import PropTypes from 'prop-types';
import css from '../ContactRender/ContactRender.module.css';

export function Contact({ contact, onDeleteContact = () => {} }) {
  return (
    <div className={css.contact}>
      <li key={contact.id}>
        {contact.name} : {contact.number}
      </li>
      <button
        className={css.textContact}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
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
