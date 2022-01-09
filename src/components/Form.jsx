import React, { Component } from 'react';
import Input from './Input/Input';
import Select from './Select/Select';
import TextArea from './TextArea/TextArea';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <Input
            datatest="name-input"
            id="nome"
            onChange={ () => { } }
            type="text"
          />
          <TextArea
            datatest="description-input"
            id="description"
          />
          <Input
            datatest="attr1-input"
            id="attr01"
            onChange={ () => { } }
            type="number"
          />
          <Input
            datatest="attr2-input"
            id="attr02"
            onChange={ () => { } }
            type="number"
          />
          <Input
            datatest="attr3-input"
            id="attr03"
            onChange={ () => { } }
            type="number"
          />
          <Input
            datatest="image-input"
            id="image"
          />
          <Select
            datatest="rare-input"
          />
        </form>
      </div>
    );
  }
}

export default Form;
