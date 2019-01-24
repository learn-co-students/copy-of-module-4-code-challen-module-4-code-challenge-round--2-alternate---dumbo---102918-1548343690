import React from "react";

const BeerItem = props => {
  return (
    <li className="beer-item" onClick={e=>props.handleClick(e, props.beer)}>
      {props.beer.name}
    </li>
  );
};

export default BeerItem;
