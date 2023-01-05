import {useEffect, useState, React } from 'react'
import {useParams} from 'react-router-dom'
import {getResults} from '../services/getResults'


export default function useSearch() {
  const [cocktails, setCocktails] = useState([])

  const {query} = useParams()
  const path = 'search.php?s='


  useEffect(() => {
    const getResultApi = async ({path, query}) => {
      const results = await getResults({path, query})
      setCocktails(results)
    }

    getResultApi({path, query})

  }, [query])

  return {cocktails, query}
}

