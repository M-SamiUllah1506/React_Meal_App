import React from "react";
import mealImage from './meals.jpg'
import classes from './Header.module.css'
import { Fragment } from "react";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food App</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="Meal" />
      </div>
    </Fragment>
  );
};

export default Header;
