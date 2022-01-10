import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { datatest, value, onSaveButtonClick, type } = this.props;
    return (
      <button
        data-testid={ datatest }
        disabled={ value }
        onClick={ onSaveButtonClick }
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
  value: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
  type: PropTypes.string,
}.isRequired;

export default Button;
