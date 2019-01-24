import React from "react";

const BeerDetail = props => {
  // console.log(props);
  return (
    <div className="beer-detail">
      <img alt="" src={props.beer.image_url} />
      <p>{props.beer.description}</p>
    </div>
  );
};

export default BeerDetail;
