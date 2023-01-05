import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import React from 'react'
export default function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    navigate(`/search/${query}`)
  }
  
  const handleChange = (e) => {
   const inputValue = e.target.value
   setQuery(inputValue)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={query}
        onChange={handleChange}
        placeholder = 'search'
        className="input-search px-4 py-1 w-24 bg-transparent text-white text-xs font-semibold border-solid border border-neutral-600 outline-0 rounded-2x1  xs:w-32  sm:w-60 sm:text-sm"
      />
      </form>
    </>
  )


}
