import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <Input
        placeholder=" Contact Filter"
        type="text"
        value={value}
        onChange={onChange}
      ></Input>
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
