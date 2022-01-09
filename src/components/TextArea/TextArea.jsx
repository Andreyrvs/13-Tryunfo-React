import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { datatest, elementId, handleChange, label, value } = this.props;
    return (
      <label htmlFor={ elementId }>
        { label }
        <textarea
          data-testid={ datatest }
          id={ elementId }
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
}.isRequire;

export default TextArea;
