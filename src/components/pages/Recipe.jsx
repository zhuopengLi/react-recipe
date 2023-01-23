import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import useTheme from '../hooks/useTheme'

export default function Recipe() {
    let { id } = useParams()
    const {
        data: recipe,
        isPending,
        error,
    } = useFetch(`https://bright-tux.cyclic.app/react-recipe/${id}`)
    const {mode} = useTheme()

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {!error && !isPending && recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className='method'>{recipe.method}</p>
                </>
            )}
        </div>
    )
}
