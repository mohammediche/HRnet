import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div className="search_data_table">
      <input className="search_input" type="search" placeholder="Search" onChange={handleSearch} />
    </div>
  );
};

export default Search;
