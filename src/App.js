import './App.css';
import React,{Fragment} from 'react';
import Header from './Components/UI/Layout/Header';
import Meals from './Meals/Meal';
import Cart from './Meals/Cart/Cart';
function App() {
  return (
    <Fragment>
    <Cart/>
      <Header/>
      <main>
         <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
