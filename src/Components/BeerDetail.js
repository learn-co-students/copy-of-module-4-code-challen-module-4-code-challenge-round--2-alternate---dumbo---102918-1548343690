import React from "react";

const BeerDetail = props => {
  let { beer } = props;
  return (
    <div className="beer-card">
      <img alt="" src={beer.image_url} />
      <p>{beer.description}</p>
    </div>
  );
};

export default BeerDetail;
