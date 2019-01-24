import React from "react";

const BeerItem = props => {
  return (
    <li
      value={props.beer}
      className="beer-item"
      onClick={e => props.handleBeerClicked(e, props.beer)}
    >
      {props.beer.name}
    </li>
  );
};

export default BeerItem;
