import React, { useState } from 'react';
import './Deezer.css';
import ListGeneral from '../listGeneral/ListGeneral';

const Deezer = () => {
  const [artist, setArtist] = useState([]);
  const [artistName, setArtistName] = useState('');

  
  const fetchData = async () => {
    
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}&limit=10`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a3dd39d526mshf9302d3fb4cf41fp110067jsn6939127f2ec8',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setArtist(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (event) => {
    setArtistName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className='divMain'>
      <div className="divSub">
        <form onSubmit={handleSubmit}>
          <input type="text" value={artistName} onChange={handleInput} placeholder='Artist name' />
          <button type='submit' >Search</button>
        </form>
        <div>
          <ListGeneral artist={artist}/>
        </div>
      </div>
    </div>
  );
};

export default Deezer;