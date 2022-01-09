import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { datatest, value, type, elementId, handleChange } = this.props;
    return (
      <button
        data-testid={ datatest }
        id={ elementId }
        onChange={ handleChange }
        value={ value }
        type={ type === 'button' ? 'button' : 'submit' }
      >
        Salvar
      </button>
    );
  }
}

Button.propTypes = {
  datatest: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  elementId: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Button;
