import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
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
    } = this.props;

    return (
      <div data-testid="name-card" className="card-container">
        <div className="card-name">
          <p>{ cardName }</p>
        </div>
        <img
          alt={ cardName }
          data-testid="image-card"
          src={ cardImage }
          height="278px"
          width="317px"
          className="card-image"
        />
        <p data-testid="description-card" className="description">
          { cardDescription }
        </p>
        <p data-testid="attr1-card">
          Attr01........
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          Attr02........
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          Attr03........
          { cardAttr3 }
        </p>
        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequire;

export default Card;
