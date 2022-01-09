import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends Component {
  render() {
    const { handleChange, datatest, type, elementId, value, label } = this.props;
    return (
      <label htmlFor={ elementId }>
        { label }
        <input
          data-testid={ datatest }
          id={ elementId }
          onChange={ handleChange }
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
  handleChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Input;
