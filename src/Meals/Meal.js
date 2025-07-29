import React,{Fragment} from "react";
import MealSummary from "./MealSummary";
import Available from "./MealAvaliable";
const Meals=()=>{
  return(
    <Fragment>
        <MealSummary/>
        <Available/>
    </Fragment>
  )
}

export default Meals;
