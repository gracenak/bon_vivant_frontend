import React from 'react'
// import Recipe from './Recipe'
import { Link } from 'react-router-dom'

const RecipeList = (props) => {

    console.log(props.recipes.data)
    return(
        <div>
            <h3>Recipes!</h3>
            {props.recipes.data && props.recipes.data.map(recipe =>
                <li key={recipe.attributes.id}>
                    <Link to={`/recipes/${recipe.attributes.id}`}>{recipe.attributes.title}</Link>
                </li>)}
        </div>
    )
}

export default RecipeList

// {props.recipes.data.map(recipe =>
//     <div key={recipe.attributes.id}><Recipe recipe={recipe.attributes} /></div>
//     )}