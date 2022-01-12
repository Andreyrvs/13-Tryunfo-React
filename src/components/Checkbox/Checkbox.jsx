import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { datatest, elementId, onInputChange, type, value, name } = this.props;
    return (
        <input
          checked={ value }
          data-testid={ datatest }
          id={ elementId }
          name={ name }
          onChange={ onInputChange }
          type={ type }
        />
    );
  }
}

Checkbox.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  onInputChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.bool,
}.isRequired;

export default Checkbox;
