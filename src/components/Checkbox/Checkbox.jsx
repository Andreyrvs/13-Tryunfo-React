import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Checkbox extends Component {
  render() {
    const { handleChange, elementId, type, value, datatest } = this.props
    return (
      <labe>
        <input
          data-testid={ datatest }
          type={ type }
          value={ value }
          id={ elementId }
          onChange={ handleChange }
        />
      </labe>
    )
  }
}

Checkbox.propTypes = {
  datatest: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  elementId: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Checkbox
