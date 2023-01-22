import React from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import RecipeList from '../reactComponents/RecipeList'

export default function Search() {

  const queryStr = useLocation().search
  const queryParams = new URLSearchParams(queryStr)
  const query = queryParams.get('q')

  const url = "https://bright-tux.cyclic.app/react-recipe?q=" + query

  const { error, isPending, data } = useFetch(url)

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {!isPending && error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {!error && !isPending && data && <RecipeList recipes={data}/>}

    </div>
  )
}