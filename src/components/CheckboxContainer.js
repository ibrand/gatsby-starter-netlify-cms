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
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  render() {
    return (
      <React.Fragment>
        {
          checkboxes[this.props.section].map(item => (
            <React.Fragment>
              <p key={item.key}>
                {item.name}
              </p>
              <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
          </React.Fragment>
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