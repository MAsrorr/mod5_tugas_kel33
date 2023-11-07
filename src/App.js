import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { BiMoviePlay } from 'react-icons/bi'
import { MdGroup } from 'react-icons/md'
import {BsBook} from 'react-icons/bs'
import {IoGameControllerOutline} from 'react-icons/io5'
import './App.css'
import Movie from './pages/Movie'
import Profile from './pages/Profile'
import Detailed from './pages/Detailed'
import Game from './pages/Game'
import Book from './pages/Book'

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 33</p>
      </header>
      <Routes>
        <Route path='/' element={<Navigate to="/movie" replace />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/book" element={<Book />} />
        <Route path="/game" element={<Game />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/detail/:id" element={<Detailed />} />
        <Route path="/book/detail/:id" element={<Detailed />} />
        <Route path="/game/detail/:id" element={<Detailed />} />
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <BiMoviePlay className="icon" /> Movie
        </NavLink>
        <NavLink to="/book" className="iconWrapper">
          <BsBook className="icon" /> Book
        </NavLink>
        <NavLink to="/game" className="iconWrapper">
          <IoGameControllerOutline className="icon" /> Game
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App
