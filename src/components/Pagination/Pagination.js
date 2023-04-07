

import React from 'react'
import ReactPaginate from 'react-paginate'

//The pagination page will style the layout and control the buttons that will function to change the page
// setPageNumber is ,the function from App.js, used to change the pageNumber and controls how to make the data change when switching pages 
const Pagination = ({ info, pageNumber,setPageNumber }) => {
  
  // Be sure to remove or comment out the console.log because it may cause error message 
  //  I inspected the info to determine the pageCount
  // console.log(info.pages)

  // It is very crucial to make sure to add the question mark before the dot or else the code will break
  return <ReactPaginate 
  className='pagination justify-content-center gap-4 my-4'
  forcePage={pageNumber === 1? 0 : pageNumber - 1}
  nextLabel='Next'
  previousLabel='Previous'
  nextClassName='btn btn-link'
  previousClassName='btn btn-link'
  pageClassName='page-item'
  pageLinkClassName='page-link'
  activeClassName='active'
  onPageChange={(data) => {
    setPageNumber(data.selected + 1)
  }}
  pageCount={info?.pages}/>
    
}

export default Pagination