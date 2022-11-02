import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { datatest, value, onSaveButtonClick, type, text } = this.props;
    return (
      <button
        className="
        hover:bg-green-600
        bg-primarText
          w-28
          h-10
          rounded-sm
          focus:outline-none
          focus:ring-2
          focus:ring-primary
          focus:ring-opacity-50
          "
        data-testid={ datatest }
        disabled={ value }
        onClick={ onSaveButtonClick }
        type={ type === 'button' ? 'button' : 'submit' }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
  type: PropTypes.string,
}.isRequired;

export default Button;
