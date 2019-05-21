import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ type = 'checkbox', name, onChange }) => (
  <input type={type} name={name} onChange={onChange} />
)

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;