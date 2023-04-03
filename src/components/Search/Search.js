

import React from 'react'
import styles from "./Search.module.scss"


const Search = () => {
  return (
    <form className="">

      <input 
      placeholder=' ' 
      type="text" 
      className="{styles.input}"
      />
      <button className="btn btn-primary">Search</button>
    
    </form>
  )
}

export default Search