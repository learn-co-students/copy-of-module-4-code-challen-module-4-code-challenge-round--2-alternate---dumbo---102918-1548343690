import React from "react";
import './BeerItem.css'

const BeerItem = (props) => {
  return (
    <li className="beer-item" onClick={()=>props.handleBeer(props.beer)}>
      {props.beer.name}
    </li>
  );
};

export default BeerItem;
