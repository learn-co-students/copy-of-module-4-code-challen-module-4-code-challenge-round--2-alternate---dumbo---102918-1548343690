import React from "react";

const BeerDetail = props => {

  return (
    <div className="beer-detail">
      <img alt="" src={props.beer.image_url} />
      <p>{props.beer.name}</p>
      <p>{props.beer.tagline}</p>
      <p>{props.beer.first_brewed}</p>
      <p>{props.beer.description}</p>
      <p>{props.beer.food_pairing}</p>
      <p>{props.beer.brewers_tips}</p>
      <p>{props.beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetail;
