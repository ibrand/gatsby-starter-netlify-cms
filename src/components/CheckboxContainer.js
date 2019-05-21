import React from 'react'
import PropTypes from 'prop-types'
import checkboxes from './checkboxConfig'
import Checkbox from './Checkbox'

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log('this.props.section ', this.props.section)
    console.log('checkboxes ', checkboxes)
    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    console.log(this.state.checkedItems.get(e.target.name))
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  render() {
    return (
      <React.Fragment>
        {
          checkboxes[this.props.section].map(item => (
            <label key={item.key}>
              {item.name}
              <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
            </label>
          ))
        }
      </React.Fragment>
    );
  }
}

CheckboxContainer.propTypes = {
  section: PropTypes.string.isRequired
}

export default CheckboxContainer