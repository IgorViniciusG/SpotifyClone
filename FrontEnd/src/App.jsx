import React from 'react'
import Header from './assets/componentes/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Artists from './assets/pages/Artists'
import Artist from './assets/pages/Artist'
import Songs from './assets/pages/Songs'
import Song from './assets/pages/Song'

const App = () => {
  return (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/artists' element={<Artists />} />
      <Route path='/artist/:id' element={<Artist />} />
      <Route path='/songs' element={<Songs />} />
      <Route path='/song/:id' element={<Song />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App