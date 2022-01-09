import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import Button from './Button/Button';
import Checkbox from './Checkbox/Checkbox';
import Input from './Input/Input';
import Select from './Select/Select';
import TextArea from './TextArea/TextArea';

class Form extends Component {
  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardName,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <h1>Adicionar Nova Carta</h1>
        <form>
          <Input
            datatest="name-input"
            handleChange={ onInputChange }
            id="input-name"
            label="Nome"
            type="text"
            value={ cardName }
          />
          <TextArea
            datatest="description-input"
            handleChange={ onInputChange }
            id="input-description"
            label="Descrição"
            value={ cardDescription }
          />
          <Input
            datatest="attr1-input"
            handleChange={ onInputChange }
            id="input-attr01"
            label="Attr01"
            type="number"
            value={ cardAttr1 }
          />
          <Input
            datatest="attr2-input"
            handleChange={ onInputChange }
            id="input-attr02"
            label="Attr02"
            type="number"
            value={ cardAttr2 }
          />
          <Input
            datatest="attr3-input"
            handleChange={ onInputChange }
            id="input-attr03"
            label="Attr03"
            type="number"
            value={ cardAttr3 }
          />
          <Input
            datatest="image-input"
            handleChange={ onInputChange }
            id="input-image"
            label="Imagem"
            value={ cardImage }
          />
          <Select
            datatest="rare-input"
            handleChange={ onInputChange }
            id="input-select"
            value={ cardRare }
          />
          <Checkbox
            datatest="trunfo-input"
            handleChange={ onInputChange }
            label="Super Trybe Trunfo"
            type="checkbox"
            value={ cardTrunfo }
          />
          <Button
            datatest="save-button"
            handleChange={ onSaveButtonClick }
            id="button-save"
            type="button"
            value={ isSaveButtonDisabled }
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequire;

export default Form;
