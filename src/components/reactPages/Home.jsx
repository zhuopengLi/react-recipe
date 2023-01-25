import React from 'react'
import useFetch from '../reactHooks/useFetch'
import RecipeList from '../reactComps/RecipeList'

export default function Home() {
    const {
        data: recipes,
        isPending,
        error,
    } = useFetch('https://bright-tux.cyclic.app/react-recipe')

    return (
        <div className='home'>
            {!isPending && error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {!error && !isPending && recipes && (
                <RecipeList recipes={recipes} />
            )}
        </div>
    )
}
