import React, { Component } from 'react';
import Input from '../Input/Input';

class Form extends Component {
  render() {
    return (
      <div>
        <Input
          label="nome"
          type="text"
          data-testid="name-input"
        />

        <label htmlFor="descricao">
          Descrição
          <textarea
            id="descricao"
            data-testid="description-input"
          />
        </label>

        <Input
          label="Attr01"
          type="number"
          data-testid="attr1-input"
        />

        <Input
          label="Attr02"
          type="number"
          data-testid="attr2-input"
        />

        <Input
          label="Attr03"
          type="number"
          data-testid="attr3-input"
        />

        <Input
          label="Imagem"
          type="text"
          data-testid="image-input"
        />

        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <Input
          type="checkbox"
          data-testid="trunfo-input"
        />

        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
