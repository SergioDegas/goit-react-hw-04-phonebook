import ContactItem from 'components/ContactList/ContactItem';
import PropTypes from 'prop-types';
import { Item } from './ContactList.styled';


const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul>
   {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactItem
              name={name}
              id={id}
              number={number}
              deleteContacts={deleteContacts}
            />
          </Item>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;