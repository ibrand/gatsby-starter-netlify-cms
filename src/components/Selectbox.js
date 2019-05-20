import React from 'react'
import PropTypes from 'prop-types'

const Selectbox = ({ label, name, onChange, type }) => (
  <React.Fragment>
    <label> {label} </label>
    <input
      className="input"
      type={type}
      name={name}
      onChange={onChange}
      required={false}
    />
  </React.Fragment>
)

Selectbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export default Selectbox
