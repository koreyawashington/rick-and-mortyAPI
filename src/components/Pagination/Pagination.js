

import React from 'react'

//The pagination page will style the layout and control the buttons that will function to 
const Pagination = () => {
    
    let next = ()=>{}
    let prev = ()=>{}

  return (
    <div className="container">
        <button onClick={prev}className="btn btn-primary">Previous</button>
        <button onClick={next}className="btn btn-primary">Next</button>
    </div>
  )
}

export default Pagination