import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SongList from '../componentes/SongList';
import { artistArray } from '../database/artists';
import { songsArray } from '../database/songs';

const Artist = () => {
  const { id } = useParams();

  const {name , banner} = artistArray.filter((currentArtistObj) => currentArtistObj._id === id)[0];
  const songsArrayFromArtists = songsArray.filter((currentSongObj) => currentSongObj.artist === name);
  console.log(songsArrayFromArtists)


  let randomIndex = 0;
  let randomIDSongsFromArtists = null;

  if (songsArrayFromArtists.length > 0) {
    randomIndex = Math.floor(Math.random() * songsArrayFromArtists.length);
    randomIDSongsFromArtists = songsArrayFromArtists[randomIndex]._id;
  }

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtists} />
      </div>

      {randomIDSongsFromArtists && (
        <Link to={`/song/${randomIDSongsFromArtists}`}>
          <FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
        </Link>
      )}
    </div>
  );
};

export default Artist;