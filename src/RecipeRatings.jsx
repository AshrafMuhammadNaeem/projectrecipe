import "./RecipeRatings.css";
import React from "react";
function RecipeRatings(props){
    return(
        <div className={props.feedback.rating >3.5 ? "green" : "red"}> {props.feedback.rating} from {props.feedback.reviews} reviews</div>
    );

}
export default RecipeRatings;