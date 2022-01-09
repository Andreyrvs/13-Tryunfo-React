import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { datatest, elementId, handleChange, value } = this.props;
    return (
      <select
        data-testid={ datatest }
        id={ elementId }
        onChange={ handleChange }
        value={ value }
      >
        <option>normal</option>
        <option>raro</option>
        <option>muito raro</option>
      </select>
    );
  }
}

Select.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
}.isRequire;

export default Select;
