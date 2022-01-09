import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { datatest, handleChange, value, elementId } = this.props;
    return (
      <select
        data-testid={ datatest }
        onChange={ handleChange }
        id={ elementId }
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
  handleChange: PropTypes.func,
  datatest: PropTypes.string,
  value: PropTypes.string,
  elementId: PropTypes.string,
}.isRequire;

export default Select;
