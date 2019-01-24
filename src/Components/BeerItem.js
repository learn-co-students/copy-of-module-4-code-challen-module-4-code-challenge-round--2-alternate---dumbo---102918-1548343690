import React from "react";

const BeerItem = (props) => {
  console.log(props)
  const beer = props.beer
  const showBeerDetail = props.showBeerDetail

  return (
    <li className="beer-item" onClick={(e) => showBeerDetail(e,beer)}>
      {beer.name}
    </li>
  );
};

export default BeerItem;
