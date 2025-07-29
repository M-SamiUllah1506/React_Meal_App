import mealImage from "./meals.jpg";
import classes from "./Header.module.css";
import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes["header-content"]}>
          <h1>Food App</h1>
          <HeaderCartButton />
        </div>
      </header>

      <div className={classes["main-image"]}>
        <img src={mealImage} alt=" Meal" />
      </div>
    </Fragment>
  );
};

export default Header;
