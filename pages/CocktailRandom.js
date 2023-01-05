import Cocktail from '../components/Cocktail';
import useRandomCocktail from '../hooks/useRandomCocktail';
import React from 'react';


export default function CocktailRandom() {
  const path = 'random.php'
  const {cocktails, getCocktailsFromApi} = useRandomCocktail({path})


  return (
    <div className="z-30 w-full h-screen flex flex-col items-center flex-wrap justify-center gap-8 md:gap-12 md:flex-row lg:gap-24">
      <div className="flex flex-col items-center justify-center md:items-start">
       <h2 className="px-6 text-left text-3x1 text-center text-white font-light  xs:text-4x1  md:text-5x1  md:px-0 lg:text-6x1">the best</h2>
       <h1 className="px-6 text-left text-5x1 text-center text-white font-bold xs:text-6x1 md:text-7x1 lg:text-8x1 ">cocktails</h1>
       <p className="px-6 text-left text-sm text-center text-white font-semibold  xs:text-base  md:text-lg md:px-0 lg:text-x1  ">ingredientes/instruccions</p>
        
        </div>
        <div className="flex flex-col items-center justify-center">
         <button
           onClick={getCocktailsFromApi}
           className="mb-6 py-2 px-5 bg-white text-xs text-black font-medium rounded-full md:text-sm"
             
         > get random cocktail</button>
         {
           cocktails.length > 0
           ? cocktails.map(cocktail => (
             <Cocktail 
                key={cocktail.idDrink}
                idDrink={cocktail.idDrink}
                strDrink={cocktail.strDrink}
                strDrinkThumb={cocktail.strDrinkThumb}

             />
           ))
           : <div className="w-52 h-52 text-white text-5x1 font-bold flex items-center justify-center rounded-x1 border-2 border-solid border-white opacity-60 ">
             ¿ <img src={"https://raw.githubusercontent.com/DPG-Code/cocktails-app/main/src/cocktail.png"} alt="cocktail" className="w-16 h-16"  />  ?
             </div>

         }
          </div>


      </div>
  )
}

