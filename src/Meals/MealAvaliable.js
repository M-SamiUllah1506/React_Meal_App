import React from "react";
import classes from "./MealAvailiable.module.css";
import Card from "../Components/UI/Card";
import MealItem from "./MealItem/MealItem";
import Brianyi from '../Meals/MealImages/Brianyi.jpg'
import Chicken from '../Meals/MealImages/chicken-korma.jpg'
import Fish from '../Meals/MealImages/Fish.jpg'
import DahiBale from '../Meals/MealImages/DahiBale.jpg'
import Castard from '../Meals/MealImages/Custard.jpg'
import Gulab from '../Meals/MealImages/Gulab.jpg'

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description: "Spicy, flavorful and most loved!",
    price: 22.99,
    image: Brianyi,
  },
  {
    id: "m2",
    name: "Chicken Korma",
    description: "Rich, creamy Mughlai-style dish",
    price: 20.49,
    image: Chicken,
  },
  {
    id: "m3",
    name: "Fish Fry",
    description: "Crispy on the outside, juicy inside",
    price: 18.25,
    image: Fish,
  },
  {
    id: "m4",
    name: "Dahi Bhalla",
    description: "Soft lentil dumplings in spiced yogurt",
    price: 10.99,
    image: DahiBale,
  },
  {
    id: "m5",
    name: "Custard Delight",
    description: "Sweet chilled dessert with fruits",
    price: 7.5,
    image: Castard,
  },
  {
    id: "m6",
    name: "Gulab Jamun",
    description: "Soft sweet balls soaked in syrup",
    price: 6.99,
    image: Gulab,
  }
];


const Available = () => {
  const mealLists = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
       image={meal.image} 
    />
  ));
  return (
    <section className={classes.meal}>
      <Card>
        <ul>{mealLists}</ul>
      </Card>
    </section>
  );
};
export default Available;
