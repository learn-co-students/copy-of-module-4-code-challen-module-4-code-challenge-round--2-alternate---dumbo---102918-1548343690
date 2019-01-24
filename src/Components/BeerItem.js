import React from "react";

const BeerItem = (props) => {
  const { beer } = props
  return (
    <li className="beer-item" onClick={''}>
      {beer.name}
    </li>
  );
};

export default BeerItem;
