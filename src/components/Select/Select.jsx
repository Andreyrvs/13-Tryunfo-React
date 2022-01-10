import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { datatest, elementId, onInputChange, value, label, name } = this.props;
    return (
      <label htmlFor={ elementId }>
        { label }
        <select
          data-testid={ datatest }
          id={ elementId }
          name={ name }
          onChange={ onInputChange }
          value={ value }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  onInputChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
}.isRequire;

export default Select;
