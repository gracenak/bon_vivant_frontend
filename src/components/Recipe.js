import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'

const Recipe = (props) => {
    console.log(props)
    let recipe = props.recipes.data[props.match.params.id - 1]
    console.log(recipe)

    return (
        <div>
        <h2>
        {recipe ? recipe.attributes.title : null }
        </h2>
        <ReviewsContainer recipe={recipe} />
        </div>
    )
}

export default Recipe

// {props.recipe.title}
