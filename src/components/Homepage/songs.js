import React from 'react';
import './songs.css'; 

const Songs = ({ songs }) => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Songs</h2>
      <div className="row g-4">
        {songs.map((song, index) => (  
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div className="songbody">
              <a href={song.link} target="_blank" rel="noopener noreferrer">
                <img src={song.image} className="img-fluid" alt={`${song.name} Album Cover`} />
                <div className="effect">
                  <img src="/images/spotifyicon.png" alt="Spotify Icon" />
                </div>
              </a>
            </div>
            <div className="songname">
              <h4 className="text-center pt-3">{song.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songs;
