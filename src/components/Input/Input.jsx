import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { onInputChange, datatest, type, elementId, value, label, name } = this.props;

    return (
      <label htmlFor={ elementId }>
        { label }
        <input
          data-testid={ datatest }
          id={ elementId }
          name={ name }
          onChange={ onInputChange }
          type={ type }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  onInputChange: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Input;
