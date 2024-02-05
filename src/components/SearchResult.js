import React from 'react';
import Tracklist from './Tracklist';

const SearchResult = (props) => {
    return (
        <div className="search-result">
            <h2>Search Results</h2>
            <Tracklist tracks={props.searchResults} addToPlaylist={props.addToPlaylist} />
        </div>
    );
};

export default SearchResult