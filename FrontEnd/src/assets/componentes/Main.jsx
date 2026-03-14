import React from 'react'
import ItemList from "./ItemList"
import { artistArray } from '../database/artists.js'
import { songsArray } from '../database/songs.js'

const Main = ({ type }) => {
  return (
    <div className='main'>
      {/* ItemList do Artista */}
      {type === "artists" || type === undefined ? (<ItemList tittle="Artistas" items={6} itemsArray={artistArray} path='/artists' idPath='/artist' />) : (<></>)}


      {/* ItemList das Músicas */}
      {type === "songs" || type === undefined ? (<ItemList tittle="Músicas" items={12} itemsArray={songsArray} path='/songs' idPath='/song' />) : (<></>)}

    </div>
  )
}

export default Main