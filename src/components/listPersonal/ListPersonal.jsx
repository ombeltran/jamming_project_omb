import React from "react";
import { FaMinus } from 'react-icons/fa';


const ListPersonal = ( { song, onDelete }) => {

    const handleDelete = () => {
        onDelete(song.id);
    };

    return (
        <div>
            <div className="content">
                <div className='contentTrack' key={song.id}>  
                    <h3>Artist: {song.artist.name}</h3>                  
                    <h4>Track: {song.title_short}</h4>
                    <audio src={song.preview} controls></audio>
                    <div className='whiteLine'></div>
                </div>          
                <div className='minus' onClick={handleDelete} ><FaMinus /></div>          
            </div>
        </div>
    )


}

export default ListPersonal;