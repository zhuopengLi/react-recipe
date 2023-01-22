import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Searchbar from './Searchbar'

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link exact="true" to="/" className='brand'><h1>Overcooked!</h1></Link>
                <Searchbar />
                <NavLink exact="true" to="/create">Create Recipe</NavLink>
            </nav>
        </div>

    )
}
