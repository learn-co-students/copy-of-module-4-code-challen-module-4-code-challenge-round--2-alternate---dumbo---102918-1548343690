import React from "react";

const BeerDetail = (props) => {
  return (
    <div className="beer-card">
      <img alt="" src={props.beer.image_url} />
      <p>{props.beer.description}</p>
    </div>
  );
};

export default BeerDetail;
