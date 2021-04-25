import React from 'react'

const Recipe = (props) => {
    console.log(props)
    let recipe = props.recipes[props.match.params.id - 1]
    console.log(recipe)

    return (
        <li>
        {recipe ? recipe.title : null }
        </li>
    )
}

export default Recipe

// {props.recipe.title}
