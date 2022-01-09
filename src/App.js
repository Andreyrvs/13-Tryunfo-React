import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    // this.state = {
    //   cardAttr1: '',
    //   cardAttr2: '',
    //   cardAttr3: '',
    //   cardDescription: '',
    //   cardImage: '',
    //   cardName: '',
    //   cardRare: '',
    //   cardTrunfo: false,
    //   hasTrunfo: false,
    //   isSaveButtonDisabled: true,
    // };
  }

  onInputChange = () => {
    console.log('onInputChange');
  }

  onSaveButtonClick = () => {
    console.log('onSaveButtonClick');
  }

  handleChange = () => {
    console.log('Clicou');
  }

  render() {
    return (
      <div>
        <h1>Adicionar Nova Carta</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
