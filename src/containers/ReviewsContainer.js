import React from 'react'
import ReviewInput from '../components/ReviewInput'
import styled from "styled-components";

const ReviewsContainer = props => {

      return (
          <ReviewWrapper>
              <ReviewHeadline>Share A Review </ReviewHeadline>
              <ReviewInput recipe={props.recipe}
                           recipeId={props.recipe && props.recipe.id} />
          </ReviewWrapper>
      )   
}

export default ReviewsContainer


const ReviewWrapper = styled.div`
  background:white;
  padding:20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom:80px;
  border-left: 1px solid rgba(0,0,0,0.1);
  height: 100vh;
  padding-top: 100px;
  background: #f6f1f0;
  padding-right: 80px;
`

const ReviewHeadline = styled.div`
  text-align: center;
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: black;
`