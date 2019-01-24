import React from "react";

const BeerDetail = (props) => {
  const { beer } = props
  // console.log(beer);
  return (
    <div className="beer-card">
      <img alt="" src={beer.image_url} />
      <p>{beer.description}</p>
    </div>
  );
};

export default BeerDetail;
