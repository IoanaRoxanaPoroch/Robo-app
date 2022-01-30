import React from "react";
import "tachyons";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue tc"
        type="search"
        placeholder="Search a Robo"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;


