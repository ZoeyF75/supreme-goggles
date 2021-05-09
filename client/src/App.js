import './App.css';
import { Fragment } from "react";

//components
import Search from "./components/Search";
import PhotosList from "./components/PhotosList";

function App() {
  return (
    <Fragment>
      <div className='container'>
        <Search />
        <PhotosList />
      </div>
      
    </Fragment>
  );
}

export default App;
