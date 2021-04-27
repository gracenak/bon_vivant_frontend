import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'

const Recipe = (props) => {
    console.log(props)
    let recipe = props.recipes[props.match.params.id - 1]
    // let recipe = props.recipes.data.filter(recipe => recipe.id == props.match.params.id)[0]
    console.log(recipe)

    return (
        <div>
        <h2>
        {recipe ? recipe.title : null }
        </h2>
        <ReviewsContainer recipe={recipe} />
        </div>
    )
}

export default Recipe

// {props.recipe.title}
