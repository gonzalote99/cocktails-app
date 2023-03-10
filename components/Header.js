import {Link} from 'react-router-dom';
import Search from "../pages/Search";
import React from 'react'
export default function Header()  {
return (
  <header className="z-50 w-full fixed top-4 flex md:h-14">
   <nav className="px-6 mx-auto w-11/12 h-full bg-[#000000d0] backdrop-blur-sm flex items-center justify-between rounded-full  md:px-8">
    <Link 
       to='/'
       className="mr-auto text-xxs text-whit font-semibold  xs:text-xs  sm:text-base"

    >Home
      </Link>
      <Link 
        to='/cocktalis-by-letter'
        className="mr-2 text-xxs text-white font-semibold   xs:text-xs  sm:text-sm sm:mr-4"
      > letters/
        </Link>
        <Link
         to='/cocktails-alcoholic'
         className="mr text-xxs text-white font-semibold xs:text-xs sm:text-sm sm:mr-4"

        >
            alcoholic
          </Link>
          <Search />
     </nav>

    </header>
)
}
