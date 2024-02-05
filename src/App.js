import React, { useState, useCallback } from 'react';

import SearchResult from './components/SearchResult';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import Spotify from "./Spotify";

import './App.css';

const dummyTracks = [
  { id: 1, name: "Try Everything", artist: "Shakira", album: "Zootopia" },
  { id: 2, name: "Believer", artist: "Image Dragons", album: "Evolve" },
  { id: 3, name: "Heroes", artist: "Zayde Wolf", album: "Rare Breed" },
]

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const playlistNameChange = useCallback((name) => { setPlaylistName(name) },[])

  const addToPlaylist = useCallback(
    (track) => {
      if (playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)) {
        return;

      }
      setPlaylistTracks((prev) => [...prev, track]);
    }, [playlistTracks]);

  const removeTrack = useCallback(
    (track) => {
      setPlaylistTracks((prevTracks) =>
        prevTracks.filter((playlistTrack) => playlistTrack.id !== track.id)
      );
    }, [])

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div >
      <h1>
        Jammming
      </h1>

      <div className='app-container'>
        <SearchBar onSearch={search} />

        <div className='app-playlist'>
          <SearchResult searchResults={searchResults} addToPlaylist={addToPlaylist} />
          <Playlist
            playlistTracks={playlistTracks}
            removeTrack={removeTrack}
            playlistNameChange={playlistNameChange}
            playlistName={playlistName}
            save={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
