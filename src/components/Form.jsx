import React, { Component } from 'react';
import Input from './Input/Input';
import Select from './Select/Select';
import TextArea from './TextArea/TextArea';
import './Form.css';
import Checkbox from './Checkbox/Checkbox';
import Button from './Button/Button';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <Input
            datatest="name-input"
            id="input-name"
            onChange={ () => { } }
            type="text"
          />
          <TextArea
            datatest="description-input"
            id="input-description"
          />
          <Input
            datatest="attr1-input"
            id="input-attr01"
            onChange={ () => { } }
            type="number"
          />
          <Input
            datatest="attr2-input"
            id="input-attr02"
            onChange={ () => { } }
            type="number"
          />
          <Input
            datatest="attr3-input"
            id="input-attr03"
            onChange={ () => { } }
            type="number"
          />
          <Input
            datatest="image-input"
            id="input-image"
          />
          <Select
            datatest="rare-input"
            id="input-select"
          />
          <Checkbox
            datatest="trunfo-input"
            type="checkbox"
          />
          <Button
            datatest="save-button"
            id="button-save"
            type="button"
          />
        </form>
      </div>
    );
  }
}

export default Form;
