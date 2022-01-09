import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { handleChange, elementId, type, value, datatest, label } = this.props;
    return (
      <label htmlFor={ elementId }>
        <input
          data-testid={ datatest }
          type={ type }
          checked={ value }
          id={ elementId }
          onChange={ handleChange }
        />
        { label }
      </label>
    );
  }
}

Checkbox.propTypes = {
  datatest: PropTypes.string,
  value: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  elementId: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Checkbox;
