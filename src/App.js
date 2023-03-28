//Importing css in bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Importing javascript in bootstrap
import "bootstrap/dist/js/bootstrap";

//Importing components
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";


function App() {
  
  const api ='https://rickandmortyapi.com/api/character'
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
