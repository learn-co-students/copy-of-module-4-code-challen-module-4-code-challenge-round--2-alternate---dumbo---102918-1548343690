import React from "react";

const BeerDetail = (props) => {
  return (
    <div className="beer-card">
      <img alt="" src={""} />
      <p>{props.description}</p>
    </div>
  );
};

export default BeerDetail;
