import React from "react";

const Search = (props) => {
  return <form className="search">
        <input onChange={(e)=> props.searchBeer(e)} type="text" placeholder="Search for a Beer" value={props.searchTerm}/>
        </form>;
};

export default Search;
