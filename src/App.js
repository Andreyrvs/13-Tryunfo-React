import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardDescription: '',
      cardImage: '',
      cardName: '',
      cardRare: '',
      cardTrunfo: false,
      // hasTrunfo: false,
      // isSaveButtonDisabled: true,
    };
  }

  handleInput = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  onSaveButtonClick = () => {
    console.log('onSaveButtonClick');
  }

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
    } = this.state;
    return (
      <div className="super-trunfo-container">
        <Form
          onInputChange={ this.handleInput }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardName={ cardName }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <Card
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardName={ cardName }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
