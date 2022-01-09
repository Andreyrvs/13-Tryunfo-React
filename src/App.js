import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Adicionar Nova Carta</h1>
        <Form />
      </div>
    );
  }
}

export default App;
