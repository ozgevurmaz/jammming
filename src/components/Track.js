import React from 'react'

import { FaPlus, FaMinus } from "react-icons/fa6";

const Track = (props) => {

    const addSong = () => {
        props.addToPlaylist(props.track);
    }
    const deleteSong = (track) => {
        props.removeTrack(props.track);
    }


    return (
        <div className='track'>
            <div className='track-info'>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} - {props.track.album}</p>
            </div>
            {
                props.addToPlaylist ? (
                    <button className='track-action' onClick={addSong}><FaPlus /></button>
                ) : (
                    <button className='track-action' onClick={deleteSong}><FaMinus /></button>
                )
            }
        </div>
    )
}

export default Track
