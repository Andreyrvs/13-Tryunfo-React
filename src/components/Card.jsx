import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../assets/default-image.svg';
import imageCover from '../assets/imageCover.svg';
// import CardRectGreen from '../assets/card-rect-green.svg';
import './Card.css';

const DESCRIPTION = 'É uma das três principais tecnologias da World Wide Web.';

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
      <div
        data-testid="name-card"
        className="card-format gap-10 flex flex-col justify-center items-center"
      >
        <h1 className="h1-card">Pre Visualização</h1>
        <section
          className=" flex w-358 h-534 rounded-lg  shadow-xl"
        >
          <section
            className="w-338 h-514 rounded-lg bg-secondary-green"
          >
            <div className="flex flex-col items-center relative">
              <p
                className="z-50
                  self-end
                  p-2
                  flex-wrap
                  absolute
                text-white
                  font-epi
                  text-2xl
                  font-bold"
              >
                { String(cardName.length) === '' ? 'JavaScript' : cardName}
              </p>
              <img
                className="absolute z-0"
                src={ imageCover }
                alt="retangulo verde"
                width="308.53px"
                height="38.93px"
              />
              <img
                alt={ cardName }
                data-testid="image-card"
                src={ cardImage === '' ? defaultImage : cardImage }
                height="270.57px"
                width="308.53px"
                className="card-image"
              />
            </div>
            <p data-testid="description-card" className="description">
              { cardDescription.length === 0 && DESCRIPTION }
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
          </section>
        </section>
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
