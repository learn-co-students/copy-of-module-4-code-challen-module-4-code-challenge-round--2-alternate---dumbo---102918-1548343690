import React from "react";

const Search = (props) => {
  return <form className="search">
  <input type="text" value={props.input} onChange={event => props.changeHandler(event.target.value)}/>
  </form>;
};

export default Search;
