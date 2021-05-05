import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'
import styled from "styled-components";
import ReviewList from './ReviewList'

const Recipe = (props) => {
    let recipe = props.recipes.filter(recipe => recipe.slug === props.match.params.slug)[0]

    return (
        <Wrapper>
            <Column>
                <Main>
                    <h2>{recipe && recipe.title } </h2>
                    Average Rating: {recipe && recipe.avg_rating} 
                    <h3>Total Cook Time: {recipe && recipe.cook_time}</h3>
                    <img src={recipe && recipe.img} alt={recipe && recipe.img}/>
                    <h3>Ingredients:</h3>
                        {recipe && recipe.ingredients}<br></br>
                    <h3>Directions:</h3>
                        {recipe && recipe.directions}
                    <ReviewList reviews={recipe && recipe.reviews} />
                </Main>
            </Column>
            <Column>
                <ReviewsContainer recipe={recipe} />
            </Column>
        </Wrapper>
    )
}

export default Recipe

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
