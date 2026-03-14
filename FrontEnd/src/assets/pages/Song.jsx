import React from 'react'
import Player from '../componentes/Player'
import { Link, useParams } from 'react-router-dom'
import { artistArray } from '../database/artists';
import { songsArray } from '../database/songs';


const Song = () => {
  const { id } = useParams();

  const {name, audio, duration, artist, image} = songsArray.filter((currentSongObj) => currentSongObj._id === id)[0];
  const artistObj = artistArray.filter((currentArtistObj) => currentArtistObj.name === artist)[0];
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Capa Música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className='song__artist-image'><img width={75} height={75} src={artistObj.image} alt={`Foto Perfil Artista ${artistObj.name}`} /></Link>

        <Player duration={duration} audio={audio}/>

        <div>
          <p className='song__name'>{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>

  )
}

export default Song