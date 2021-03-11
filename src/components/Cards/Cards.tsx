import React from "react";

import { CardsProps } from "./Cards.types";

import "./Cards.scss";

const CardObj = [
  { title: "Card", description: "Im the card number " },
  { title: "Card", description: "Im the card number " },
  { title: "Card", description: "Im the card number " },
  { title: "Card", description: "Im the card number " },
  { title: "Card", description: "Im the card number " },
  { title: "Card", description: "Im the card number " },
];

const Cards: React.FC<CardsProps> = ({ theme }) => (
  <div data-testid="cards" className="cards">
    {CardObj.map((card, index) => {
      return (
        <div className={`card card-${theme}`} id={`card-${index}`}>
          <div className="card__inner">
            <span>{card.title}</span>
            <div className="card__expander">
            {card.description}{index}
          </div>
          </div>
          
        </div>
      );
    })}
  </div>
);

export default Cards;
