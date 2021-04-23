import React from 'react'

const RecipeList = (props) => {
    // debugger
    console.log(props)
    return(
        <div>
        {props.recipes.data.map(recipe => 
            <li key={recipe.attributes.id}>{recipe.attributes.title}</li>)}
        </div>
    
    )
}

export default RecipeList