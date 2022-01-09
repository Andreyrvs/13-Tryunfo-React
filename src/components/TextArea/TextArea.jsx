import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { handleChange, datatest, elementId, value } = this.props;
    return (
      <label htmlFor={ elementId }>
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
  handleChange: PropTypes.func,
  datatest: PropTypes.string,
  value: PropTypes.string,
  elementId: PropTypes.string,
}.isRequire;

export default TextArea;
