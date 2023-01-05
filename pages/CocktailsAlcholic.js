import React from 'react'
import Cocktail from '../components/Cocktail'
import Layout from '../components/Layout'
import LayoutResults from '../components/LayoutResults'
import useCocktails from '../hooks/useCocktails'


export default function CocktailsAlcholic() {
  const path = 'filter.php?a='
  const {cocktails, getCocktailsFromApi} = useCocktails({path})

  return(
    <Layout>
     <h2 className="px-6 mt-24 mb-12 text-2x1 text-black text-center font-bold  sm:text-3x1">alcoholic/not</h2>
     <div className="px-6 w-full flex items-center flex-wrap justify-center gap-4 " >
       <button
       onClick={() => getCocktailsFromApi('Alcoholic')}
       className="py-2 px-4 bg-black text-sm text-white font-bold  rounded-full  sm:text-base"
       >
        alcoholic
         </button>
         <button
          onClick={() => getCocktailsFromApi('Non_Alcoholic')}
          className="py-2 px-4 bg-black text-sm text-white font-bold rounded-full  sm:text-base"

         > no alcoholic

           </button>

       </div>
       <LayoutResults>
         {
           cocktails?.map(cocktail => (
             <Cocktail
               key={cocktail.idDrink}
               idDrink={cocktail.idDrink}
               strDrink={cocktail.strDrink}
               strDrinkThumb={cocktail.strDrinkThumb}
             />
           ))
         }
         </LayoutResults>
      </Layout>
  )
}

