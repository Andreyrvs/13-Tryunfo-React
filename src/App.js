import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cardTrunfo: false, 
    };
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
