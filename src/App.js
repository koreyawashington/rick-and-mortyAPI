

//Importing css in bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Importing javascript in bootstrap
import "bootstrap/dist/js/bootstrap";
//Import React, useState, and useEffect from react
import React, {useState, useEffect} from "react";

//Importing components
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Search from "./components/Search/Search"
import Pagination from "./components/Pagination/Pagination"
// import NavBar from "./components/NavBar/NavBar"


function App() {
  //===========This is the section fot eh main logic of the page numbers and how they will change======
  //The number inside of the useState(parentheses) is a default placeholder for the page number.
  //When the page changes pageNumber will update to setPageNumber and render that data.
  // Inside of the const variable is a function, pageNumber is classified as a variable and setPageNumber is classified as a function.
  // setPageNumber is used to change the pageNumber === very simple
  const [pageNumber, setPageNumber ] = useState(1);
  
console.log(pageNumber);
  
  //This state will hold our character information
  const [fetchedData, updateFetchedData] = useState([]);
  
  const {info, results} = fetchedData
 
  //console.log will allow me to see the results of each new page to ensure everything is running properly
  // console.log(results);
  

  //The api key is stored in my const api variable
  //In order to use other  variables inside of the api weblink I must use back ticks instead of single or double quotes
  const api =`https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  //===================================================================================================

//=========Fetching Data=================
//when the website loads for the first time it will automatically render the data for the default page(page 1)
//when the page clicks over to a new page, new data will render using the useEffect statement below
//This function will run as soon as the page changes to show the results of the newly rendered data from the api
useEffect(() => {

(async function(){
  const data = await fetch(api).then(res=>res.json())
 updateFetchedData(data)
  // console.log(data.results);
})()

  //When api changes I want to fetch new data inside of the arrow function
}, [api]) 

  return (
    <div className="App">
      {/* This is the styling for the banner text at the top of the webpage */}
      <h1 className="text-center ubuntu my-4">Rick & Morty <span className="text-primary">WiKi</span></h1>

      <Search  />  

      <div className="container">
        <div className="row">
          {/* The 'Filters' div will consist of 3 columns on the page */}
          <div className="col-3">
            <Filters />
          </div>
          {/* The 'Cards' div will consists of 8 columns */}
          <div className="col-8">
            <div className="row">
            <Cards results={results}/>
            
            </div>
          </div>
        </div>
        </div>  
      <Pagination pageNumber={pageNumber} setPageNumber={ setPageNumber } />
    </div>
  );
}

export default App;
