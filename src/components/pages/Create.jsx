import React from 'react'
import { useState, useEffect, useRef } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null)
    const navigate = useNavigate()

    const { data, postData } = useFetch(
        'https://bright-tux.cyclic.app/react-recipe',
        'POST'
    )

    const handleSubmit = e => {
        e.preventDefault()
        postData({
            title,
            ingredients,
            method,
            cookingTime: cookingTime + ' minutes',
        })
    }

    const handleAdd = e => {
        e.preventDefault()
        setNewIngredient(prev => prev.trim())

        if (newIngredient && !ingredients.includes(newIngredient)) {
            setIngredients(prev => [...prev, newIngredient])
        }

        setNewIngredient('')
        ingredientInput.current.focus()
    }

    useEffect(() => {
        if (data) {
            console.log(data)
            navigate('/')
        }
    }, [data])

    return (
        <div className='create'>
            <h2 className='page-title'>Add a New Recipe</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:</span>
                    <input
                        type='text'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span>Recipe ingredients:</span>
                    <div className='ingredients'>
                        <input
                            type='text'
                            onChange={e => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button onClick={handleAdd} className='btn'>
                            Add
                        </button>
                    </div>
                </label>

                <p>
                    Current ingredients:{' '}
                    {ingredients.map(i => (
                        <em key={i}>{i}, </em>
                    ))}
                </p>

                <label>
                    <span>Recipe method:</span>
                    <textarea
                        onChange={e => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>

                <label>
                    <span>Cooking time (minutes):</span>
                    <input
                        type='number'
                        onChange={e => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>

                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}
