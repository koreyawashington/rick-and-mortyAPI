

import React from 'react'
import ReactPaginate from 'react-paginate'

//The pagination page will style the layout and control the buttons that will function to change the page
// setPageNumber is ,the function from App.js, used to change the pageNumber and controls how to make the data change when switching pages 
const Pagination = ({ info, pageNumber,setPageNumber }) => {
  
  //  I inspected the info to determine the pageCount
  // console.log(info.pages)

  // It is verycrucial to make sure to add the question mark before the dot or else the code will break
  return <ReactPaginate pageCount={info?.pages}/>
    
}

export default Pagination