import React from "react";

const Search = props => {
  return <form className="search">
        <input text="text" name="name" placeholder="Search Beers" value={props.searchTerm} onChange={props.handleSearch} />
        </form>;
};

export default Search;
