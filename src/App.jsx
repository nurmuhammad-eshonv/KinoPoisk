import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BookMarkMovies from './pages/BookMarkMovies'
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<BookMarkMovies />} />
        </Routes>
    </div>
  )
}

export default App