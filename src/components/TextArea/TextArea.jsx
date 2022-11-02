import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const {
      datatest,
      elementId,
      onInputChange,
      // label,
      value,
      name,
      classe,
    } = this.props;
    return (
      // <label
      //   htmlFor={ elementId }
      //   className="text-format"
      // >
      //   { label }
      //* </label>
      <textarea
        className={ classe }
        data-testid={ datatest }
        id={ elementId }
        name={ name }
        onChange={ onInputChange }
        value={ value }
      />
    );
  }
}

TextArea.propTypes = {
  datatest: PropTypes.string,
  elementId: PropTypes.string,
  onInputChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
}.isRequire;

export default TextArea;
