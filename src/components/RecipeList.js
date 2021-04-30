import React from 'react'
import RecipeCard from './RecipeCard'
import styled from "styled-components";

const RecipeList = (props) => {

    const card = props.recipes.map(recipe => 
        <RecipeCard key={recipe.title}
                    attributes={recipe} />
    )
        
    return(
        <Home>
            <Header>
                <h1>Bon Vivant</h1>
                <Subheader>A collection of tested and reviewed recipes for food lovers</Subheader>
            </Header>
                <Grid>
                {card}
            </Grid>
        </Home>
    )
}

export default RecipeList

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f6f1f0
`

const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
      font-size: 42px;
  }
`

const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  `