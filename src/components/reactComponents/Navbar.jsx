import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import useTheme from '../hooks/useTheme'

export default function Navbar() {
    const { color, changeColor } = useTheme()

    return (
        <div className='navbar' style={{ background: color }}>
            <nav
                onClick={() => {
                    changeColor('purple')
                }}
            >
                <Link to='/' className='brand'>
                    <h1>Overcooked!</h1>
                </Link>
                <Searchbar />
                <NavLink to='/create'>Create Recipe</NavLink>
            </nav>
        </div>
    )
}
