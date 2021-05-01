import React from 'react'
import RecipeCard from './RecipeCard'
import styled from "styled-components";
import RecipeInput from '../components/RecipeInput'

const RecipeList = (props) => {

    const card = props.recipes.map(recipe => 
        <RecipeCard key={recipe.title}
                    attributes={recipe} />
    )
        
    return(
          <Wrapper>
            <Column>
                <Main>
                <Grid>
                {card}
            </Grid>
            </Main>
            </Column>
            <Column>
              <RecipeInput />
            </Column>
        </Wrapper>
  
    )
}

export default RecipeList

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
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
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`



const Main = styled.div`
  padding-left: 60px;
`
