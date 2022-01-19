import React from "react";

function Search({ search, onSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={search} onChange={onSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
