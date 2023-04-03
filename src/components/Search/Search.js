

import React from 'react'
import styling from "./Search.module.scss";


const Search = () => {
  return (
    <form className="">
{/* The input is where the web user will be able to use the search bar to search throughout the website */}
      <input 
      placeholder=' ' 
      type="text" 
      className={styling.input}
      />

      <button className="btn btn-primary">Search</button>
    
    </form>
  )
}

export default Search