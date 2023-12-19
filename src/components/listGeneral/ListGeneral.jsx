import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import ListPersonal from '../listPersonal/ListPersonal';

const ListGeneral = ({ artist }) => {
  const [selectedSongs, setSelectedSongs] = useState([]);

  const handleClick = (song) => {
    setSelectedSongs([...selectedSongs, song]);
  };

  const handleDelete = (songId) => {
    const updatedSongs = selectedSongs.filter((song) => song.id !== songId);
    setSelectedSongs(updatedSongs);
  };

    return (
      <div className='divMainChild'>
        <div className='card'>
          {artist.data && artist.data.length > 0? (
            <>             
              <div className='detail'>
                <h2 className='results'>Tracks:</h2>
                {/* <img src={artist.data[0].artist.picture} alt={artist.data[0].title_short} /> */}
                <h3>Artist: {artist.data[0].artist.name}</h3>
                {artist.data.map((song) => (
                  <div className="content" key={song.id}>
                    <div className='contentTrack' key={song.id}>                    
                      <h4>Track: {song.title_short}</h4>
                      <audio src={song.preview} controls></audio>
                      <div className='whiteLine'></div>
                    </div>
                    <div className='add' onClick={() => handleClick(song)}><MdAdd /></div>                    
                  </div>
                ))}
              </div>
            </>
          ): (
            <div className='detail'>
              <h2 className='results'>Tracks:</h2>
            </div>
          )}  
        </div>
        <div className="listPersonal">
          <div className="detail">
            <h2 className='resultsListPesonal'>Music list:</h2>
            {selectedSongs.map((song) => (
              <ListPersonal key={song.id} song={song} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default ListGeneral;