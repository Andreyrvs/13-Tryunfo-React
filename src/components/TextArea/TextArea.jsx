import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { datatest, elementId, onInputChange, label, value, name } = this.props;
    return (
      <label htmlFor={ elementId }>
        { label }
        <textarea
          data-testid={ datatest }
          id={ elementId }
          name={ name }
          onChange={ onInputChange }
          value={ value }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  onInputChange: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
}.isRequire;

export default TextArea;
