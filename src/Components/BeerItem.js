import React from "react";

const BeerItem = (props) => {
  return (
    <li className="beer-item" onClick={() => props.clickHandler(props.beer)}>
      <button>{props.beer.name}</button>
    </li>
  );
};

export default BeerItem;
