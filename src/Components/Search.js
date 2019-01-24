import React from "react";

const Search = props => {
  let { searchHandler } = props;
  return (
    <form className="search">
      {/*Build Form Here*/}
      <input
        name="search"
        placeholder="search"
        onChange={e => searchHandler(e.target.value)}
      />
    </form>
  );
};

export default Search;
