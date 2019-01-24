import React from "react";

const Search = (props) => {

  return (
  <input className="search" type="text" value={props.value} onChange={(e) => props.handleChange(e)}/>
)
};

export default Search;
