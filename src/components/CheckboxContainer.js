import React from 'react'
import PropTypes from 'prop-types'
import checkboxes from './checkboxConfig'

const CheckboxContainer = ({ section, onChange }) => (
  <React.Fragment>
    {
      checkboxes[section].map(item => (
        <React.Fragment key={item.key}>
          <div className="checkbox-container">
            <input label={item.name} name={item.name} onChange={onChange} type={'checkbox'} id={item.name} />
            <label htmlFor={item.name}>{item.name}</label>
          </div>
      </React.Fragment>
      ))
    }
  </React.Fragment>
)

CheckboxContainer.propTypes = {
  section: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CheckboxContainer