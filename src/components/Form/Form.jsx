import React from 'react';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Input
            datatest="name-input"
            id="name"
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
        </form>
      </div>
    );
  }
}

export default Form;
