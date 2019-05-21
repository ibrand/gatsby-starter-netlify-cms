import React from 'react'
import PropTypes from 'prop-types'
import checkboxes from './checkboxConfig'

const CheckboxContainer = ({ section, onChange }) => (
  <React.Fragment>
    {
      checkboxes[section].map(item => (
        <React.Fragment>
          <p key={item.key}>
            {item.name}
          </p>
          <input label={item.name} name={item.name} onChange={onChange} type={'checkbox'} />
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