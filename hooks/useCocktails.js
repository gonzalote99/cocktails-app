import {useState , React} from 'react';
import {getCocktails} from '../services/getCocktails';


export default function useCocktails({path}) {
  const [cocktails, setCocktails] = useState([])
 
  const getCocktailsFromApi = async (keyword = '') => {
    const results = await getCocktails({path, keyword})
    setCocktails(results)
  }
  return {cocktails, getCocktailsFromApi}

}