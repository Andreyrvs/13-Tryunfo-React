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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form-container">
        <h1>Adicionar Nova Carta</h1>
        <form>
          <Input
            datatest="name-input"
            onInputChange={onInputChange}
            id="input-name"
            label="Nome"
            name="cardName"
            type="text"
            value={cardName}
          />
          <TextArea
            datatest="description-input"
            onInputChange={onInputChange}
            id="input-description"
            label="Descrição"
            name="cardDescription"
            value={cardDescription}
          />
          <Input
            datatest="attr1-input"
            onInputChange={onInputChange}
            id="input-attr01"
            label="Attr01"
            name="cardAttr1"
            type="number"
            value={cardAttr1}
          />
          <Input
            datatest="attr2-input"
            onInputChange={onInputChange}
            id="input-attr02"
            label="Attr02"
            name="cardAttr2"
            type="number"
            value={cardAttr2}
          />
          <Input
            datatest="attr3-input"
            onInputChange={onInputChange}
            id="input-attr03"
            label="Attr03"
            name="cardAttr3"
            type="number"
            value={cardAttr3}
          />
          <Input
            datatest="image-input"
            onInputChange={onInputChange}
            id="input-image"
            label="Imagem"
            name="cardImage"
            value={cardImage}
          />
          <Select
            datatest="rare-input"
            onInputChange={onInputChange}
            id="input-select"
            label="Raridade"
            name="cardRare"
            value={cardRare}
          />
          {hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' :
            <label>
              <Checkbox
                datatest="trunfo-input"
                onInputChange={onInputChange}
                name="cardTrunfo"
                type="checkbox"
                value={cardTrunfo}
              />
              Super Trybe Trunfo
            </label>
          }
          <label>
            <Button
              datatest="save-button"
              onSaveButtonClick={onSaveButtonClick}
              id="button-save"
              name="isSaveButtonDisabled"
              type="button"
              value={isSaveButtonDisabled}
            />
          </label>
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
