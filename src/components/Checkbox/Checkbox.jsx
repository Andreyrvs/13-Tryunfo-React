import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { datatest, elementId, handleChange, label, type, value } = this.props;
    return (
      <label htmlFor={ elementId }>
        <input
          checked={ value }
          data-testid={ datatest }
          id={ elementId }
          onClick={ handleChange }
          type={ type }
        />
        { label }
      </label>
    );
  }
}

Checkbox.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.bool,
}.isRequired;

export default Checkbox;
