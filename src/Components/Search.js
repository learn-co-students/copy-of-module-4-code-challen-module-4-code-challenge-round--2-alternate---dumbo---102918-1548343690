import React from "react";

const Search = (props) => {
  return <form className="search">
    <input type="text" onChange={(event)=> props.onChange(event)}/>
  </form>;

};

export default Search;
