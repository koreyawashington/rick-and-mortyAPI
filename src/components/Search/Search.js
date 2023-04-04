

import React from 'react'
import styling from "./Search.module.scss";


const Search = () => {
  return (
    <form className="d-flex justify-content-right gap-4 mb-5">
{/* The input is where the web user will be able to use the search bar to search throughout the website */}
      <input 
      placeholder='Wubba Lubba Dub Dub!' 
      type="text" 
      className={styling.input}
      />

      <button className={`btn btn-primary fs-5`}>Search</button>
    
    </form>
  )
}

export default Search