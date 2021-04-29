import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'
import RecipeEdit from './RecipeEdit'
import Header from './Header'
import styled from "styled-components";
import ReviewList from '../components/ReviewList'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: white;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
`

const Main = styled.div`
  padding-left: 60px;
`

const Recipe = (props) => {
    console.log(props)
    // let recipe1 = props.match.params.slug
    // let recipe = props.recipes[props.match.params.id - 1]
    let recipe = props.recipes.filter(recipe => recipe.slug == props.match.params.slug)[0]
    console.log(recipe)

    let data = props.recipe

    return (
        <Wrapper>
        <Column>
        <Main>
            <h2>{recipe ? recipe.title : null } </h2>
            <h3>Total Cook Time: {recipe ? recipe.cook_time : null}</h3>
            <img src={recipe ? recipe.img : null} alt={recipe ? recipe.img : null}/>
            <h3>Ingredients:</h3>
            <h4>{recipe ? recipe.ingredients : null}</h4><br></br>
            <h3>Directions:</h3>
            <h5>{recipe ? recipe.directions : null}</h5>
        <ReviewList reviews={data && data.reviews} />

            <RecipeEdit recipe={recipe}/>
        </Main>
            </Column>
            <Column>
                <ReviewsContainer recipe={recipe} />

            </Column>


        </Wrapper>

    )
}

export default Recipe

// {props.recipe.title}

// {/* <div>
//         <h2>{recipe ? recipe.title : null } </h2>
//         <h3>Total Cook Time: {recipe ? recipe.cook_time : null}</h3>
//         <img src={recipe ? recipe.img : null} alt={recipe ? recipe.img : null}/>
//         <h3>Ingredients:</h3>
//         <h4>{recipe ? recipe.ingredients : null}</h4><br></br>
//         <h3>Directions:</h3>
//         <h5>{recipe ? recipe.directions : null}</h5>
//         <ReviewsContainer recipe={recipe} />
//         <RecipeEdit recipe={recipe}/>
//         </div> */}

{/* <ReviewList reviews={data && data.reviews}
/>  */}