import React from 'react';
import Form from './components/Form/Form';
import './App.css';

class App extends React.Component {
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
