import React from 'react'

const Recipe = (props) => {
    console.log(props)
    let recipe = props.recipes.data[props.match.params.id - 1]
    console.log(recipe)

    return (
        <h2>
        {recipe ? recipe.attributes.title : null }
        </h2>
    )
}

export default Recipe

// {props.recipe.title}
