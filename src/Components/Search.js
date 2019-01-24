import React from "react";

const Search = props => {
  return (
    <form className="search">
      <input
        onChange={e => props.typeInForm(e, e.target.value)}
        type="text"
        value={props.formInput}
      />
    </form>
  );
};

export default Search;
