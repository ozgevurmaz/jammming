import React, { useState, useCallback } from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = useCallback((event) => {
    setSearchText(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(searchText);
  }, [props.onSearch, searchText]);

  return (
    <div className="searchbar">
      <input placeholder="Search a song" onChange={handleSearchChange} />
      <button className="search-button" onClick={search}>
        <FaSearch />
      </button>
    </div>
  )
}

export default SearchBar;
