

import React from 'react'
import styling from "./Search.module.scss";


const Search = ({ setSearch }) => {
  return (
    <form className="d-flex justify-content-right gap-4 mb-5">
{/* The input is where the web user will be able to use the search bar to search throughout the website */}
      {/* When there is a change in events or when something is submitted inside the search input box that will trigger the setSearch function to run. After the setSearch function is triggered it will update the search variable and the update the api which means that it will run the useEffect to get fresh new data that will be related to the what was being searched for in the input search box*/}
      <input 
      onChange={e=>{
        setSearch(e.target.value);
      }}
      placeholder='Wubba Lubba Dub Dub!' 
      type="text" 
      className={styling.input}
      />

      <button className={`${styling.btn} btn btn-primary fs-5`}>Search</button>
    
    </form>
  )
}

export default Search