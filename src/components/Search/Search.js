

import React from 'react'
import styling from "./Search.module.scss";


const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-right gap-4 mb-5">
      
      {/* The input is where the web user will be able to use the search bar to search throughout the website */}
      {/* When there is a change in events or when something is submitted inside the search input box that will trigger the setSearch function to run. After the setSearch function is triggered it will update the search variable and the update the api which means that it will run the useEffect to get fresh new data that will be related to the what was being searched for in the input search box*/}
      <input 
      onChange={e=>{
        // each page will start from page one as a default page. The content on the pages are going to change and some filters may have multiple pages of content that relate to the choosen filter or search so I want all of the pages to start at 1 everytime, that is why I passed in 1 for setPageNumber function === setPageNumber(1);
        setPageNumber(1);
        setSearch(e.target.value);
      }}
      placeholder='Wubba Lubba Dub Dub!' 
      type="text" 
      className={styling.input}
      />
      
      {/* When the Search Button is clicked on, the onClick function is triggered to prevent the search button from refreshing wh */}
      <button onClick={e=>{
        e.preventDefault()
      }} className={`${styling.btn} btn btn-primary fs-5`}
      >Search
      </button>
    
    </form>
  )
}

export default Search