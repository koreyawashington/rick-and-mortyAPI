

import React from 'react'

//The pagination page will style the layout and control the buttons that will function to change the page
// setPageNumber is ,the function from App.js, used to change the pageNumber and controls how to make the data change when switching pages 
const Pagination = ({ setPageNumber }) => {
    
    let next = ()=>{
       
        //Inside of this arrow function the x represents the previous value
        //The next button will allow the current page number to increase to the next page only by( + 1) one page. Page 1 is the default page so when the next button is clicked the page will change to page 2 and load fresh data from api update for page 2. 
        // Once the Api updates it will also update the useEffect as well from my App.js
        setPageNumber(( x ) => x + 1 ) 
    }

    let prev = ()=>{

        //inside of this arrow function the x represents  
        setPageNumber(( x ) => x - 1 )
    }

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
    
        <button onClick={prev}className="btn btn-primary">Previous</button>
        
        <button onClick={next}className="btn btn-primary">Next</button>
    
    </div>
  )
}

export default Pagination