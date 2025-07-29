import './App.css';
import React,{Fragment} from 'react';
import Header from './Components/UI/Layout/Header';
import Meals from './Meals/Meal';
function App() {
  return (
    <Fragment>
      <Header/>
      <main>
         <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
