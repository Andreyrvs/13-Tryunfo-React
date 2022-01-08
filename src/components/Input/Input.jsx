import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends Component {
  render() {
    const { handleChange, label, name, testid, type, value } = this.props;
    return (
      <label className="label" htmlFor={ name }>
        { label }
        <input
          data-testid={ testid }
          className="input"
          name={ name }
          onChange={ handleChange }
          type={ type }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  testid: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Input;
