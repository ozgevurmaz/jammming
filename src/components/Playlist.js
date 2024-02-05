import React, { useCallback, useState } from 'react'
import Tracklist from './Tracklist'

function Playlist(props) {

    const changeName = useCallback((e) => {
        props.playlistNameChange(e.target.value)
    }, [props.changeNameSubmit])

    return (
        <div className='playlist-content'>

            <div className='input-container'>
                <input onChange={changeName} defaultValue={props.playlistName} />
            </div>

            <button className='save-button' onClick={props.save}>Save</button>

            {
                props.playlistTracks && <Tracklist
                    tracks={props.playlistTracks}
                    removeTrack={props.removeTrack}
                />
            }

        </div>
    )
}

export default Playlist
