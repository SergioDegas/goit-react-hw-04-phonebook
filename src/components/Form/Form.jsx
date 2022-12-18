import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FormStyled, Input, Label } from './Form.styled';

 const Form = ({ onSubmit }) => {
 

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({name,number});
 setName('');
 setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label>
        <Input
          value={name}
          type="text"
          name="name"
          placeholder=" Name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <br></br>
      <Label>
        <Input
          value={number}
          onChange={handleChange}
          type="tel"
          placeholder=" Number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contacts</Button>
    </FormStyled>
  );
};
export default Form;
  Form.prototype = {
  onSubmit: PropTypes.func.isRequired,
};


