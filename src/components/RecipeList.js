import React from 'react'
// import Recipe from './Recipe'
import { Link } from 'react-router-dom'

const RecipeList = (props) => {

    console.log(props.recipes)
    return(
        <div>
            <h3>Recipes!</h3>
            {props.recipes && props.recipes.map(recipe =>
                <li key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                </li>)}
        </div>
    )
}

export default RecipeList

// {props.recipes.data.map(recipe =>
//     <div key={recipe.attributes.id}><Recipe recipe={recipe.attributes} /></div>
//     )}