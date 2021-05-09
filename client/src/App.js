import './App.css';
import { Fragment } from "react";

//components
import PhotosList from "./components/PhotosList";
import Input from './components/Input';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <Input />
        <PhotosList />
      </div>
      
    </Fragment>
  );
}

export default App;
