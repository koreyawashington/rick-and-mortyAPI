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
import NavBar from "./components/NavBar/NavBar"


function App() {
  //===========This is the section fot eh main logic of the page numbers and how they will change======
  //The number inside of the useState(parentheses) is a default placeholder for the page number
  const [pageNumber, setPageNumber ] = useState(1);
  //In order to use other  variables inside of the api weblink I must use back ticks instead of single or double quotes
  const api =`https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  //===================================================================================================

//=========Fetching Data=================

useEffect(() => {

(async function(){
  const data = await fetch(api).then(res=>res.json())
  console.log(data);
})()

  //When api changes I want to fetch new data inside of the arrow function
}, [api]) 

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">Rick & Morty <span className="text-primary">WiKi</span></h1>

      <div className="container">
        <div className="row">
          {/* The 'Filters' div will consist of 3 columns on the page */}
          <div className="col-3">
            <Filters />
          </div>
          {/* The 'Cards' div will consists of 8 columns */}
          <div className="col-8">
            <div className="row">
            <Cards />
            
            </div>
          </div>
        </div>
        </div>    
    </div>
  );
}

export default App;
