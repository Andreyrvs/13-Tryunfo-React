import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import Input from './Input/Input';
import Select from './Select/Select';
import TextArea from './TextArea/TextArea';
import Checkbox from './Checkbox/Checkbox';
import Button from './Button/Button';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      isSaveButtonDisabled: false,
    };
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>
          <Input
            datatest="name-input"
            id="input-name"
            handleChange={ onInputChange }
            type="text"
            label="Nome"
            value={ cardName }
          />
          <TextArea
            datatest="description-input"
            id="input-description"
            label="Descrição"
            value={ cardDescription }
            handleChange={ onInputChange }
          />
          <Input
            datatest="attr1-input"
            id="input-attr01"
            handleChange={ onInputChange }
            type="number"
            label="Attr01"
            value={ cardAttr1 }
          />
          <Input
            datatest="attr2-input"
            id="input-attr02"
            handleChange={ onInputChange  }
            type="number"
            label="Attr02"
            value={ cardAttr2 }
          />
          <Input
            datatest="attr3-input"
            id="input-attr03"
            handleChange={ onInputChange  }
            type="number"
            label="Attr03"
            value={ cardAttr3 }
          />
          <Input
            datatest="image-input"
            id="input-image"
            label="Imagem"
            value={ cardImage }
            handleChange={ onInputChange }
          />
          <Select
            datatest="rare-input"
            id="input-select"
            value={ cardRare }
            handleChange={ onInputChange }
          />
          <Checkbox
            datatest="trunfo-input"
            type="checkbox"
            label="Super Trybe Trunfo"
            value={ cardTrunfo }
            handleChange={ onInputChange }
          />
          <Button
            datatest="save-button"
            id="button-save"
            type="button"
            handleChange={ onSaveButtonClick }
            value={ isSaveButtonDisabled }
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequire;

export default Form;
