import React from 'react'
import logoSpotify from "../logo/spotify-logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return ( 
    <header className='header'>
      <Link to="/">
        <img src={logoSpotify} alt="Logo do Spotify" />
      </Link>
      
      <h1>
        <Link to="/" className='header__link'>Spotify</Link>
      </h1>
      </header>
  )
}

export default Header