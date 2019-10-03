import React from 'react'
import PropTypes from 'prop-types'
import checkboxes from './checkboxConfig'

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map()
    }
  }

  handleCheck = e => {
    const item = e.target.name
    const isChecked = e.target.checked
    this.setState({ checkedItems: this.state.checkedItems.set(item, isChecked) })
    let isValid = false
    this.state.checkedItems.forEach( (val, key) => {
      if (val === true) {
        isValid = true
      }
    })
    this.props.handleCheckboxContainer(isValid, this.props.section, this.state.checkedItems)
  }

  render() {
    return(
      <>
      {checkboxes[this.props.section].map(item => (
          <React.Fragment key={item.key}>
            <div className="checkbox-container">
              <input
                label={item.name}
                name={item.label ? item.label : item.name}
                onChange={this.handleCheck}
                type={'checkbox'}
                id={item.label ? item.label : item.name}
              />
              <label htmlFor={item.label ? item.label : item.name}>{item.name}</label>
            </div>
          </React.Fragment>
        ))}
      </>
    )
  }
}

CheckboxContainer.propTypes = {
  section: PropTypes.string.isRequired,
  handleCheckboxContainer: PropTypes.string
}

export default CheckboxContainer
