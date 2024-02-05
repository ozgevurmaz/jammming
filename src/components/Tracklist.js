import React from 'react'
import Track from './Track'

function Tracklist(props) {
  return (
    <div className='each-track'>
     {props.tracks.map((track)=>{
        return <Track key={track.id} track={track} addToPlaylist={props.addToPlaylist} removeTrack={props.removeTrack} />
     })}
      
    </div>
  )
}

export default Tracklist
