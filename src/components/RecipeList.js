import React from 'react'
import Recipe from './Recipe'

const RecipeList = (props) => {

    console.log(props)
    return(
        <div>
            <h3>Recipes!</h3>
            {props.recipes.data.map(recipe =>
     <div key={recipe.attributes.id}><Recipe recipe={recipe.attributes} /></div>
     )}

        </div>
    
    )
}

export default RecipeList







//  {props.recipes.data.map(recipe => 
//     <li key={recipe.id}>{recipe.attributes.title}</li>)}