import React from 'react'
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Recipe from './pages/Recipe'
import Search from './pages/Search'
import Navbar from './reactComponents/Navbar'

export default function App() {

  return (
    <div className="App">

      <Router>

        <Navbar />

        <Routes>
          <Route path='/' exact="true" element={<Home />} />
          <Route path='/create' exact="true" element={<Create />} />
          <Route path='/search' exact="true" element={<Search />} />
          <Route path='/recipes/:id' exact="true" element={<Recipe />} />
          <Route path="*" element={redirect("/")} />
        </Routes>

      </Router>

    </div>
  )
}