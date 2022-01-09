import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { datatest, elementId, handleChange, type, value } = this.props;
    return (
      <button
        data-testid={ datatest }
        disabled={ value }
        id={ elementId }
        onClick={ handleChange }
        type={ type === 'button' ? 'button' : 'submit' }
      >
        Salvar
      </button>
    );
  }
}

Button.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.bool,
}.isRequired;

export default Button;
