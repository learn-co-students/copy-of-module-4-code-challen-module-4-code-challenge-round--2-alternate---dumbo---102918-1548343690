import React from "react";

const BeerItem = (props) => {
  const { beer } = props
  return (

    <li className="beer-item" onClick={() => props.onClick(beer)}>
      {beer.name}
    </li>
  );
};

export default BeerItem;
