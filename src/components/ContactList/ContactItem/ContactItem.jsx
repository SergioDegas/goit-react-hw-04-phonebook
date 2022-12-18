import PropTypes from 'prop-types';
import { Button, TextStyled } from './ContactItem.styled';

const ContactItem = ({ name, number, id, deleteContacts }) => {
  return (
    <>
      <p>{name}</p>
      <TextStyled>{number}</TextStyled>
      <Button
        type="button"
        onClick={() => {
          deleteContacts(id);
        }}
      >
        Delete
      </Button>
    </>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};



export default ContactItem;