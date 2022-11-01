import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import Button from './components/Button/Button';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardDescription: '',
      cardImage: '',
      cardName: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardSave: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState(
      {
        [name]: type === 'checkbox' ? checked : value,
      },
      this.handleSaveBtn,
    );
  };

  handleSaveBtn = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const emptyElement = cardName && cardDescription && cardImage !== '';
    const maxLimit = 210;
    const attrLimit = 90;
    const some = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (
      emptyElement
      && Number(cardAttr1) <= attrLimit
      && Number(cardAttr2) <= attrLimit
      && Number(cardAttr3) <= attrLimit
      && some <= maxLimit
      && cardAttr1 >= 0
      && cardAttr2 >= 0
      && cardAttr3 >= 0
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onSaveButtonClick = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardName,
      cardRare,
      cardTrunfo,
      cardSave,
    } = this.state;

    const card = {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardName,
      cardRare,
      cardTrunfo,
    };

    const CartasAnteriores = cardSave;

    this.setState({
      cardSave: [...CartasAnteriores, card],
    }, this.handleTrumpValidation);

    this.setState({
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardDescription: '',
      cardImage: '',
      cardName: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  handleTrumpValidation = () => {
    const { cardSave } = this.state;

    const boll = cardSave.some((trunfo) => trunfo.cardTrunfo === true);
    this.setState({ hasTrunfo: boll });
  }

  handleLetterRemoval = (id) => {
    const { cardSave } = this.state;
    const updateCards = cardSave.filter((card) => card.cardName !== id);
    this.setState({ cardSave: updateCards }, this.handleTrumpValidation);
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
      cardSave,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div className="super-trunfo-container">
        <div className="form-preview-container">
          <Form
            onInputChange={ this.handleChange }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardName={ cardName }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
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
        <div className="new-card-container">
          {cardSave.map((card) => (
            <div className="new-card" key={ card.cardDescription }>
              <Card
                key={ card.cardName }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardDescription={ card.cardDescription }
                cardImage={ card.cardImage }
                cardName={ card.cardName }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <Button
                text="Excluir"
                datatest="delete-button"
                onSaveButtonClick={ () => this.handleLetterRemoval(card.cardName) }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
