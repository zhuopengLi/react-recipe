import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    redirect,
} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Recipe from './pages/Recipe'
import Search from './pages/Search'
import Navbar from './reactComponents/Navbar'
import ThemeSelector from './reactComponents/ThemeSelector'
import useTheme from './hooks/useTheme'

export default function ChildApp() {
    const { mode } = useTheme()

    return (
        <div className={`App ${mode}`}>
            <Router>
                <Navbar />
                <ThemeSelector />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/recipes/:id' element={<Recipe />} />
                    <Route path='*' element={redirect('/')} />
                </Routes>
            </Router>
        </div>
    )
}
