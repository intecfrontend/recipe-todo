import React from "react";

const Recipe = ({title, calories, image, ingredients}) => {
    
    return(
    <div>
        <h4>{title}</h4>
        <p>{calories}</p>
        <img className="recipeimg" src={image} alt=""/>
        <p>{calories}</p>

    </div>);};

export default Recipe;