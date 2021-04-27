import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'
import RecipeEdit from './RecipeEdit'

const Recipe = (props) => {
    console.log(props)
    let recipe = props.recipes[props.match.params.id - 1]
    // let recipe = props.recipes.data.filter(recipe => recipe.id == props.match.params.id)[0]
    console.log(recipe)

    return (
        <div>
        <h2>{recipe ? recipe.title : null } </h2>
        <h3>Total Cook Time: {recipe ? recipe.cook_time : null}</h3>
        <img src={recipe ? recipe.img : null} alt={recipe ? recipe.img : null}/>
        <h3>Ingredients:</h3>
        <h4>{recipe ? recipe.ingredients : null}</h4><br></br>
        <h3>Directions:</h3>
        <h5>{recipe ? recipe.directions : null}</h5>
        <ReviewsContainer recipe={recipe} />
        <RecipeEdit recipe={recipe}/>
        </div>
    )
}

export default Recipe

// {props.recipe.title}
