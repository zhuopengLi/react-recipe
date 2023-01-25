import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    redirect,
} from 'react-router-dom'
import Home from './reactPages/Home'
import Create from './reactPages/Create'
import Recipe from './reactPages/Recipe'
import Search from './reactPages/Search'
import Navbar from './reactComps/Navbar'
import ThemeSelector from './reactComps/ThemeSelector'
import useTheme from './reactHooks/useTheme'

export default function App() {
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
