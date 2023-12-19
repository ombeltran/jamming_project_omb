import React, { useState } from 'react';
import '../styles.css';
import ListGeneral from '../listGeneral/ListGeneral';
import { Title } from '../Title/Title';

const Deezer = () => {
  const [artist, setArtist] = useState([]);
  const [artistName, setArtistName] = useState('');

  
  const fetchData = async () => {
    
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}&limit=10`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
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
    <>
      <Title />
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
    </>
  );
};

export default Deezer;