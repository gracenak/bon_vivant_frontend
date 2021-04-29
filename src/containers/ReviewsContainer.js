import { Component } from 'react'
import ReviewInput from '../components/ReviewInput'
import ReviewList from '../components/ReviewList'
import styled from "styled-components";

const Field = styled.div`
  border-radius: 4px;
  input {
    width: 96%;
    min-height:40px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  
  textarea {
    width: 100%;
    min-height:80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`

const SubmitBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #71b406;
  width:100%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`

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

const RecipeHeadline = styled.div`
  text-align: center;
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: black;
`

class ReviewsContainer extends Component {
    render() {
        return (
            <ReviewWrapper>
                <RecipeHeadline>Share A Review </RecipeHeadline>
                <ReviewInput recipe={this.props.recipe}
                             recipeId={this.props.recipe && this.props.recipe.id}
                />
<ReviewList reviews={this.props.recipe && this.props.recipe.reviews}
/> 

            </ReviewWrapper>
        )
    }   
}

export default ReviewsContainer

/* <ReviewList reviews={this.props.recipe && this.props.recipe.reviews}/> */
{/* <ReviewList reviews={this.props.recipe && this.props.recipe.reviews}
/>  */}