import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      onInputChange,
      datatest,
      type,
      elementId,
      value,
      // label,
      name,
      classe,
    } = this.props;

    return (
      <input
        className={ classe }
        data-testid={ datatest }
        id={ elementId }
        name={ name }
        onChange={ onInputChange }
        type={ type }
        value={ value }
      />

    );
  }
}

Input.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  onInputChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Input;
