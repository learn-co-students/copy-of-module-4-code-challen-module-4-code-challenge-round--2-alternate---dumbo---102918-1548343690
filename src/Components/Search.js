import React from "react";

const Search = () => {
  return <form className="search"><input type=”text” name=”title” value={this.state.title}
    onChange={this.props.handleChange}/></form>;
};

export default Search;
